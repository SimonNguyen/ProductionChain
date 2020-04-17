import { DirectedGraph } from 'graphology';
import { reverse } from 'graphology-operators';
import findCircuits from 'elementary-circuits-directed-graph';

import { TierNames } from '../../data';

/**
 * Returns a directed multigraph for recipe calculations.
 *
 * @export
 * @param {*} recipes - Array of recipe objects
 * @returns
 */
function GenerateGraph(recipes) {
  let directedGraph = new DirectedGraph();
  directedGraph.upgradeToMulti();

  recipes.forEach((recipe) => {
    directedGraph.addNode(Number(recipe.step), {
      inputs: recipe.inputs,
      machineName: recipe.machineName,
      machineTier: recipe.machineTier,
      outputs: recipe.outputs,
      targetMachines: 1,
      time: recipe.overclock ? recipe.timeoc : recipe.time,
      visitedCount: 0,
    });
  });

  let edgeGraph = GenerateEdges(directedGraph);
  let reversedGraph = reverse(edgeGraph);
  let acyclicGraph = RemoveCycles(reversedGraph);

  return acyclicGraph;
}

/**
 * Generates edges based on recipe input and output objects via direct linking.
 *
 * @param {*} graph - A directed multigraph with no edges.
 * @returns
 */
function GenerateEdges(graph) {
  let edgeGraph = graph;

  edgeGraph.forEachNode((source, sourceAttributes) => {
    sourceAttributes.outputs.forEach((output) => {
      edgeGraph.forEachNode((target, targetAttributes) => {
        if (source !== target) {
          targetAttributes.inputs.forEach((input) => {
            if (input.name === output.name) {
              edgeGraph.addDirectedEdge(source, target, {
                name: input.name,
                inputQuantity: input.quantity,
                inputTime: targetAttributes.time,
                outputQuantity: output.quantity,
                outputTime: sourceAttributes.time,
              });
            }
          });
        }
      });
    });
  });

  return edgeGraph;
}

/**
 * Converts a directed multigraph into a directed acyclic multigraph.
 *
 * @param {*} graph
 * @returns
 */
function RemoveCycles(graph) {
  let adjList = FindAdjList(graph);
  let cycles = findCircuits(adjList);

  if (cycles) {
    let acyclicGraph = FixGraph(graph, cycles);
    return acyclicGraph;
  } else {
    return graph;
  }
}

/**
 * Returns a list of adjacent edges.
 *
 * @param {*} graph
 * @returns
 */
function FindAdjList(graph) {
  let edges = [];

  graph.forEachNode((node) => {
    edges[node] = [];
  });

  graph.forEachEdge(
    (edge, attributes, source, target, sourceAttributes, targetAttributes) => {
      edges[source].push(Number(target));
    }
  );
  let adjList = Object.values(edges);

  return adjList;
}

/**
 * Removes cyclic edges from a graph.
 *
 * @param {*} graph
 * @param {*} cycles
 * @returns
 */
function FixGraph(graph, cycles) {
  let tmpGraph = graph;

  for (let cycle of cycles) {
    let source = cycle[0];
    let target = cycle[1];

    let edges = tmpGraph.edges(source, target);
    edges.forEach((edge) => {
      tmpGraph.dropEdge(edge);
    });
  }

  return tmpGraph;
}

/**
 * Returns an object containing totals for machines per step, machines in chain, rf/t, inputs and outputs.
 *
 * @param {*} recipes
 * @param {*} graph
 * @returns
 */
function MachineRequirements(recipes, graph) {
  let machineTotals = [];
  let machineSteps = [];
  let rft = 0;
  let inputs = [];
  let outputs = [];

  if (typeof recipes === 'undefined' || recipes.length === 0) {
    return { machineTotals, machineSteps, rft, inputs, outputs };
  }

  inputs = FindInitialInputs(graph);
  outputs = FindFinalOutputs(graph);

  graph.forEachNode((node, attributes) => {
    let tier = TierNames[attributes.machineTier];
    let prefix = tier !== 'N/A' ? tier + ' ' : '';
    let machineName = attributes.machineName;
    let machine = prefix + machineName;
    let recipe = recipes[node];
    let recipeRft = recipe.overclock ? recipe.rftoc : recipe.rft;

    if (!(machine in machineTotals)) {
      machineTotals[machine] = Math.ceil(attributes.targetMachines);
    } else {
      machineTotals[machine] =
        machineTotals[machine] + Math.ceil(attributes.targetMachines);
    }

    machineSteps[node] =
      machine +
      ' ' +
      attributes.targetMachines.toFixed(2) +
      ' (' +
      Math.ceil(attributes.targetMachines) +
      ')';

    rft = rft + Math.ceil(attributes.targetMachines) * recipeRft;
  });

  return { machineTotals, machineSteps, rft, inputs, outputs };
}

/**
 * Determines the initial input requirements for a provided graph.
 *
 * @param {*} graph
 * @returns
 */
function FindInitialInputs(graph) {
  let inputs = [];

  graph.forEachNode((node, attributes) => {
    attributes.inputs.forEach((input) => {
      if (!(input.name in inputs)) {
        inputs[input.name] = {
          node: Number(node),
          quantity: input.quantity,
          time: attributes.time,
          targetMachines: attributes.targetMachines,
        };
      }
    });

    graph.forEachOutEdge(
      (
        edge,
        attributes,
        source,
        target,
        sourceAttributes,
        targetAttributes
      ) => {
        if (attributes.name in inputs) {
          delete inputs[attributes.name];
        }
      }
    );
  });

  return inputs.sort();
}

/**
 * Determines the final outputs for the provided graph.
 *
 * @param {*} graph
 * @returns
 */
function FindFinalOutputs(graph) {
  let outputs = [];

  graph.forEachNode((node, attributes) => {
    attributes.outputs.forEach((output) => {
      if (!(output.name in outputs)) {
        outputs[output.name] = {
          node: Number(node),
          quantity: output.quantity,
          time: attributes.time,
          targetMachines: attributes.targetMachines,
        };
      }
    });

    graph.forEachOutEdge(
      (
        edge,
        attributes,
        source,
        target,
        sourceAttributes,
        targetAttributes
      ) => {
        if (attributes.name in outputs) {
          delete outputs[attributes.name];
        }
      }
    );
  });

  return outputs.sort();
}

/**
 * Calculates the number of machines required to satisfy a node's recipe.
 *
 * @param {*} graph
 * @param {*} sourceNode
 * @param {*} calculatorTargetMachines
 * @returns
 */
function CalculateTarget(graph, sourceNode, calculatorTargetMachines) {
  let sourceAttributes = graph.getNodeAttributes(sourceNode);
  if (typeof calculatorTargetMachines !== 'undefined') {
    graph.setNodeAttribute(
      sourceNode,
      'targetMachines',
      calculatorTargetMachines
    );
  }

  graph.forEachOutNeighbor(sourceNode, (targetNode, targetAttributes) => {
    let edges = graph.edges(sourceNode, targetNode);

    edges.forEach((edge) => {
      let edgeAttributes = graph.getEdgeAttributes(edge);
      let inBPS =
        (edgeAttributes.inputQuantity / edgeAttributes.inputTime) *
        sourceAttributes.targetMachines;
      let outBPS = edgeAttributes.outputQuantity / edgeAttributes.outputTime;
      let targetMachines = inBPS / outBPS;

      if (
        graph.getNodeAttribute(targetNode, 'visitedCount') > 0 &&
        graph.inDegree(targetNode) > 1
      ) {
        graph.updateNodeAttribute(
          targetNode,
          'targetMachines',
          (n) => n + targetMachines
        );
        graph.updateNodeAttribute(targetNode, 'visitedCount', (n) => n + 1);
      } else {
        graph.setNodeAttribute(targetNode, 'targetMachines', targetMachines);
        graph.setNodeAttribute(targetNode, 'visitedCount', 1);
      }
    });

    return CalculateTarget(graph, targetNode);
  });

  return graph;
}

export { GenerateGraph, MachineRequirements, CalculateTarget };
