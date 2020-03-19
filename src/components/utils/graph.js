import { DirectedGraph } from 'graphology';
import { reverse } from 'graphology-operators';
import findCircuits from 'elementary-circuits-directed-graph';

import { TierNames } from '../../data';

/**
 *A directed graph for recipe calculations.
 *
 * @export
 * @param {*} recipes - Input object containing recipes
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
      time: recipe.overclock === 'true' ? recipe.timeoc : recipe.time,
      visitedCount: 0,
    });
  });

  let edgeGraph = GenerateEdges(directedGraph);
  let reversedGraph = reverse(edgeGraph);
  let acyclicGraph = RemoveCycles(reversedGraph);

  return acyclicGraph;
}

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

function MachineRequirements(recipes, graph) {
  let machineTotals = [];
  let machineSteps = [];
  let rft = 0;

  let inputs = FindInitialInputs(graph);
  let outputs = FindFinalOutputs(graph);

  graph.forEachNode((node, attributes) => {
    let tier = TierNames[attributes.machineTier];
    let prefix = tier !== 'N/A' ? tier + ' ' : '';
    let machineName = attributes.machineName;
    let machine = prefix + machineName;

    if (!(machine in machineTotals)) {
      machineTotals[machine] = Math.ceil(attributes.targetMachines);
    } else {
      machineTotals[machine] =
        machineTotals[machine] + Math.ceil(attributes.targetMachines);
    }

    machineSteps[node] = machine + ' ' + Math.ceil(attributes.targetMachines);

    rft = rft + Math.ceil(attributes.targetMachines) * recipes[node].rft;
  });

  return { machineTotals, machineSteps, rft, inputs, outputs };
}

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
