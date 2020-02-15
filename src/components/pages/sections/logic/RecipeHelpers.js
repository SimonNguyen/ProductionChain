import * as data from '../data';
let tierNames = data.TierNames;
let voltages = data.Voltages;

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

export function GetPairs(inputs, outputs) {
    let pairs = []
    let weight = outputs.length / inputs.length;

    inputs.map(input =>
        outputs.map(output =>
            pairs.push([input.name, output.name, weight])
        ));
    
    return pairs;
}