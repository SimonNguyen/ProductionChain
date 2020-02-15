import * as data from '../data';
let tierNames = data.TierNames;
let voltages = data.Voltages;
let colors = data.Colors;

// Adapted from GregTech Community Edition calculateOverclock function.
// https://github.com/GregTechCE/GregTech/blob/master/src/main/java/gregtech/api/capability/impl/AbstractRecipeLogic.java
export function Overclock(RFt, tierName, duration) {
    let tier = tierNames.indexOf(tierName);
    let EUt = RFt / 4;
    let resultEUt, resultDuration, multiplier = 0;

    if (voltages[tier] <= EUt || tier === 0) {
        return {
            rft: EUt * 4,
            time: duration
        }
    }

    if (EUt <= 16) {
        if (EUt <= 8) {
            multiplier = tier;
        } else {
            multiplier = tier - 1;
        }

        resultEUt = EUt * (1 << multiplier) * (1 << multiplier);
        resultDuration = duration / (1 << multiplier);

    } else {
        resultEUt = EUt;
        resultDuration = duration;

        while (resultDuration >= 3 && resultEUt <= voltages[tier - 1]) {
            resultEUt = resultEUt * 4;
            resultDuration = resultDuration / 2.8;
        }
    }

    return {
        rft: resultEUt * 4,
        time: Math.ceil(resultDuration)
    }
}

export function GetLinks(recipes) {
    let links = [];

    recipes.map((recipe, index) =>
        recipe.inputs.map(input =>
            recipe.outputs.map(output =>
                links.push({
                    source: input.name,
                    target: output.name,
                    value: recipe.outputs.length / recipe.inputs.length,
                    color: colors[index % colors.length]
                })
            )
        )
    );

    return links;
}

export function GetNodes(pairs) {
    let nodes = [];
    let outputNodes = [];

    pairs.map(pair =>
        nodes.push(pair.source, pair.target)
    );

    let uniqueNodes = [...new Set(nodes)];
    uniqueNodes.forEach((element, index) =>
        outputNodes.push({
            name: element,
            color: colors[index % colors.length]
        }));

    return outputNodes;
}

export function parseItems(raw) {
    //Works - needs improvement for readability
    let list = raw.split(';');
    let items = [];
    for(let index in list){
        let item = list[index].split(',');
        console.log(item);
        items.push(
            {
                quantity: item[0],
                unit: item[1],
                name: item[2]
            }
        )
    };
    return (items);
}
export function FixLinks(links, nodes) {
    let names = [];
    let sankeyLinks = [];

    nodes.map(node => names.push(node.name));

    links.forEach(link => {
        sankeyLinks.push({
            source: names.indexOf(link.source),
            target: names.indexOf(link.target),
            value: link.value,
            color: link.color
        })
    });

    return sankeyLinks;
}