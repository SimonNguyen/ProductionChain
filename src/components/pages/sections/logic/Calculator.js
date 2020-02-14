export function OVERCLOCK(RFt, tierName, duration) {
    var tierNames = ["ULV", "LV", "MV", "HV", "EV", "IV", "LuV", "ZPMV", "UV"]
    var tier = tierNames.indexOf(tierName);
    var voltages = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288];
    var EUt = RFt / 4;
    var resultEUt, resultDuration, multiplier = 0;

    if (voltages[tier] === EUt || tier === 0) {
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