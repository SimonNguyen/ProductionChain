export function pushDefault(array, n) {
  let newArray = array;
  if (array.length < n) {
    for (let i = array.length; i < n; i++) {
      newArray.push({ name: '', quantity: 1, unit: 'b' });
    }
  } else {
    newArray = newArray.slice(0, n);
  }
  return newArray;
}

export function newRecipe(
  isEu,
  step,
  machineName,
  machineTier,
  overclock,
  rft,
  time,
  inputs,
  outputs
) {
  let recipe = {
    step: step,
    machineName: machineName,
    machineTier: machineTier,
    overclock: overclock,
    rft: isEu ? rft * 4 : rft,
    time: time,
    inputs: inputs,
    outputs: outputs,
    targetMachines: 1,
  };

  return recipe;
}
