import { DirectedGraph } from 'graphology';
import reverse from 'graphology-operators/reverse';
import * as data from '../data';
let tierNames = data.TierNames;
let voltages = data.Voltages;
let colors = data.Colors;

/**
 * Adapted from GregTech Community Edition calculateOverclock function.
 * https://github.com/GregTechCE/GregTech/blob/master/src/main/java/gregtech/api/capability/impl/AbstractRecipeLogic.java
 * Returns object containing { rft: number, time: number }
 * 
 * @export
 * @param {Number} RFt - RF per tick
 * @param {String} tierName - GregTech machine tier
 * @param {Number} duration - Recipe duration in seconds
 * @returns 
 */
export function Overclock(RFt, tierName, duration) {
    let tier = tierNames.indexOf(tierName);
    let EUt = RFt / 4;
    let resultEUt, resultDuration, multiplier = 0;

    if (tier === 0) return { rft: RFt, time: duration };

    if (voltages[tier] <= EUt || tier === 0) {
        return {
            rft: EUt * 4,
            time: duration
        };
    };

    if (EUt <= 16) {
        if (EUt <= 8) {
            multiplier = tier;
        } else {
            multiplier = tier - 1;
        };

        resultEUt = EUt * (1 << multiplier) * (1 << multiplier);
        resultDuration = duration / (1 << multiplier);

    } else {
        resultEUt = EUt;
        resultDuration = duration;

        while (resultDuration >= 3 && resultEUt <= voltages[tier - 1]) {
            resultEUt = resultEUt * 4;
            resultDuration = resultDuration / 2.8;
        }
    };

    return {
        rft: resultEUt * 4,
        time: Math.ceil(resultDuration)
    };
}

/**
 * Sankey diagram data for React-Plotly.js Sankey diagrams.
 *
 * @export
 * @param {Object} recipes - Input object containing recipes
 * @returns 
 */
export function GenerateSankeyData(recipes) {
    let sankeyData = {};
    sankeyData.data = [];
    sankeyData.data.push({
        type: "sankey",
        orientation: "h",
        valueformat: ".3f",
        valuesuffix: " Blocks",
        domain: {
            "x": [
                0,
                1
            ],
            "y": [
                0,
                1
            ]
        },
        node: {
            pad: 15,
            thickness: 15,
            line: {
                color: "black",
                width: 0.5
            },
            label: []
        },
        link: {
            colorscales: [{
                colorscale: "Rainbow"
            }]
        }
    });

    let labels = GetLabels(recipes);
    sankeyData.data[0].node.label = labels;
    sankeyData.data[0].link = Object.assign(sankeyData.data[0].link, GetLinks(recipes, labels));

    return sankeyData;
}

/**
 * Returns a list of item labels. Valid types are "both", "inputs" and "outputs".
 * By default, the type is both.
 *
 * @export
 * @param {*} type
 * @param {*} recipes - Input object containing recipes
 * @returns
 */
export function GetLabels(recipes, type = "both") {
    let labels = [];

    recipes.forEach(recipe => {
        if (type === "both" || type === "inputs") {
            recipe.inputs.forEach(input => {
                if (labels.indexOf(input.name) === -1) {
                    labels.push(input.name);
                }
            })
        }

        if (type === "both" || type === "outputs") {
            recipe.outputs.forEach(output => {
                if (labels.indexOf(output.name) === -1) {
                    labels.push(output.name);
                }
            })
        }
    })

    return labels;
}

/**
 *An object containing React-Plotly.js Sankey diagram links
 *
 * @param {*} recipes - Input object containing recipes
 * @param {*} labels - Input array containing item labels
 * @returns
 */
function GetLinks(recipes, labels) {
    let links = {
        source: [],
        target: [],
        value: [],
        label: [],
        color: []
    };

    recipes.forEach(recipe => {
        recipe.inputs.forEach(input => {
            recipe.outputs.forEach(output => {
                links.source.push(labels.indexOf(input.name));
                links.target.push(labels.indexOf(output.name));
                (output.unit === 'b') ? links.value.push(output.quantity * recipe.targetMachines) : links.value.push(output.quantity * recipe.targetMachines / 1000);
                links.label.push(recipe.machine + " (" + recipe.tier + ")");
                links.color.push(HexToRGB(colors[Math.floor(Math.random() * colors.length)], 50));
            })
        })
    })

    return links;
}

/**
 *Returns an RGBA color value
 *
 * @param {String} hex - Input hex color string
 * @param {Number} opacity - Input opacity value between 0 and 100
 * @returns {String}
 */
function HexToRGB(hex, opacity) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';

    return result;
}

/**
 *A directed graph for recipe calculations.
 *
 * @export
 * @param {*} recipes - Input object containing recipes
 * @returns
 */
export function GenerateRecipeGraph(recipes, targets) {
    let directedGraph = new DirectedGraph();

    recipes.forEach(recipe => {
        directedGraph.addNode(recipe.step, {
            machineName: recipe.machine,
            targetMachines: targets.machines,
            time: recipe.overclock === "true" ? recipe.timeoc : recipe.time,
            inputs: recipe.inputs,
            outputs: recipe.outputs,
            visited: false
        });
    })

    let edgeGraph = CalculateEdges(directedGraph);
    let reversedGraph = reverse(edgeGraph);
    let calculatedGraph = CalculateGraph(reversedGraph, 9, "Polymer Clay");

    return calculatedGraph;
}

function CalculateGraph(graph, sourceNode) {
    return DepthFirstTraversal(graph, sourceNode);
}

// TODO: Optimize edge calculation
function CalculateEdges(graph) {
    let edgeGraph = graph;

    edgeGraph.forEachNode((source, sourceAttributes) => {
        sourceAttributes.outputs.forEach(output => {
            edgeGraph.forEachNode((target, targetAttributes) => {
                if (source !== target) {
                    targetAttributes.inputs.forEach(input => {
                        if (input.name === output.name) {
                            edgeGraph.addDirectedEdge(source, target, {
                                inputQuantity: input.quantity,
                                inputTime: targetAttributes.time,
                                outputQuantity: output.quantity,
                                outputTime: sourceAttributes.time
                            });
                        }
                    })
                }
            })
        })
    })

    return edgeGraph;
}

function DepthFirstTraversal(graph, sourceNode) {
    let sourceAttributes = graph.getNodeAttributes(sourceNode);

    graph.forEachOutNeighbor(sourceNode, function (targetNode, targetAttributes) {
        let edge = graph.getEdgeAttributes(sourceNode, targetNode);
        let inBPS = (edge.inputQuantity / edge.inputTime) * sourceAttributes.targetMachines;
        let outBPS = edge.outputQuantity / edge.outputTime;
        let targetMachines = inBPS / outBPS;

        if (targetAttributes.visited && graph.inDegree(targetNode) > 1) {
            let currentTarget = graph.getNodeAttribute(targetNode, "targetMachines", targetMachines);
            graph.setNodeAttribute(targetNode, "targetMachines", currentTarget + targetMachines);
        } else {
            graph.setNodeAttribute(targetNode, "targetMachines", targetMachines);
            graph.setNodeAttribute(targetNode, "visited", true);
        }

        return DepthFirstTraversal(graph, targetNode);
    })

    return graph;
}

export function OutputRecipes(graph, recipes) {
    recipes.forEach((recipe, node) => {
        recipe.targetMachines = graph.getNodeAttribute(node, "targetMachines");
    })

    return recipes;
}