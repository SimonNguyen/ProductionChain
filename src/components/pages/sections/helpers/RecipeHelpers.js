import { DirectedGraph } from 'graphology';
import * as data from '../data';
let tierNames = data.TierNames;
let voltages = data.Voltages;
let colors = data.Colors;

/**
 * Adapted from GregTech Community Edition calculateOverclock function.
 * https://github.com/GregTechCE/GregTech/blob/master/src/main/java/gregtech/api/capability/impl/AbstractRecipeLogic.java
 * 
 * @export
 * @param {Number} RFt - RF per tick
 * @param {String} tierName - GregTech machine tier
 * @param {Number} duration - Recipe duration in seconds
 * @returns Returns object containing { rft: number, time: number }
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

export function ParseItems(raw) {
    //Works - needs improvement for readability
    let list = raw.split(';');
    let items = [];
    for (let index in list) {
        let item = list[index].split(',');
        items.push(
            {
                quantity: item[0].trim(),
                unit: item[1].trim(),
                name: item[2].trim()
            }
        )
    };
    return (items);
}

/**
 *
 * @export
 * @param {Object} recipes - Input object containing recipes
 * @returns Sankey diagram data for React-Plotly.js Sankey diagrams.
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
 *
 *
 * @export
 * @param {*} recipes - Input object containing recipes
 * @returns A list of item labels.
 */
export function GetLabels(recipes) {
    let labels = [];

    recipes.forEach(recipe => {
        recipe.inputs.forEach(input => {
            if (labels.indexOf(input.name) === -1) {
                labels.push(input.name);
            }
        })
        recipe.outputs.forEach(output => {
            if (labels.indexOf(output.name) === -1) {
                labels.push(output.name);
            }
        })
    })

    return labels;
}

/**
 *
 *
 * @param {*} recipes - Input object containing recipes
 * @param {*} labels - Input array containing item labels
 * @returns An object containing React-Plotly.js Sankey diagram links
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
                (output.unit === 'b') ? links.value.push(output.quantity) : links.value.push(output.quantity / 1000);
                links.label.push(recipe.machine + " (" + recipe.tier + ")");
                links.color.push(HexToRGB(colors[Math.floor(Math.random() * colors.length)], 50));
            })
        })
    })

    return links;
}

/**
 *
 *
 * @param {String} hex - Input hex color string
 * @param {Number} opacity - Input opacity value between 0 and 100
 * @returns {String} - Returns an RGBA color value
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
 *
 *
 * @export
 * @param {*} recipes - Input object containing recipes
 * @returns A directed graph for recipe calculations.
 */
export function GenerateRecipeGraph(recipes) {
    let directedGraph = new DirectedGraph();

    recipes.forEach(recipe => {
        recipe.inputs.forEach(input => {
            if (!directedGraph.hasNode(input.name)) {
                directedGraph.addNode(input.name);
            }
        })

        recipe.outputs.forEach(output => {
            if (!directedGraph.hasNode(output.name)) {
                directedGraph.addNode(output.name);
            }
        })
    })

    recipes.forEach(recipe => {
        recipe.inputs.forEach(input => {
            recipe.outputs.forEach(output => {
                if (!directedGraph.hasEdge(input.name, output.name)) {
                    let weight = output.unit === 'b' ? output.quantity : output.quantity / 1000;
                    directedGraph.addEdge(input.name, output.name, {
                        weight: weight
                    });
                }
            })
        })
    })

    return directedGraph;
}