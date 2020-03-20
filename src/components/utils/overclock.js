import { TierNames, Voltages } from '../../data';
/**
 * Adapted from GregTech Community Edition calculateOverclock function.
 * https://github.com/GregTechCE/GregTech/blob/master/src/main/java/gregtech/api/capability/impl/AbstractRecipeLogic.java
 * Returns object containing { rft: number, time: number }
 *
 * @export
 * @param {Number} EUt - EU per tick
 * @param {Number} tierIndex - GregTech machine tier
 * @param {Number} duration - Recipe duration in ticks
 * @returns
 */
function Overclock(EUt, tierIndex, duration) {
  let tier = TierNames[tierIndex] - 1;
  let resultEUt = EUt;
  let resultDuration = duration;
  let multiplier = 0;

  if (Voltages[tier] <= EUt || tier === 0 || tier === -1 || EUt === 0) {
    return {
      eut: resultEUt,
      ticks: resultDuration,
    };
  }

  if (EUt <= 16) {
    if (EUt <= 8) {
      multiplier = tier;
    } else {
      multiplier = tier - 1;
    }

    resultEUt = EUt * (1 << multiplier) * (1 << multiplier);
    resultDuration = duration / (1 << multiplier);

    return {
      eut: resultEUt,
      ticks: resultDuration,
    };
  } else {
    while (resultDuration >= 3 && resultEUt <= Voltages[tierIndex - 1]) {
      resultEUt = resultEUt * 4;
      resultDuration = resultDuration / 2.8;
    }
  }

  return {
    eut: resultEUt,
    ticks: Math.ceil(resultDuration),
  };
}

function AddOverclock(recipes) {
  recipes.forEach((recipe) => {
    let oc = Overclock(recipe.rft / 4, recipe.machineTier, recipe.time);

    recipe.rftoc = oc.eut * 4;
    recipe.timeoc = oc.ticks;
  });

  return recipes;
}

export { Overclock, AddOverclock };
