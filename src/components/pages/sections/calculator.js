import data from './data';

function GetPairs() {
    let pairs = [];
    let recipes = data.Recipes;

    for(let step in recipes){
        recipes[step].inputs.map(input =>
            recipes[step].outputs.map(output =>
                pairs.push({input: input.name, output: output.name, weight: getWeight(step, recipes)})
            )
        )
    }

    console.log(pairs)
    console.log(nodeList())
}

function nodeList() {
    let nodes = [];
    let recipes = data.Recipes;

    for(let step in recipes){
        recipes[step].inputs.map(input => nodes.push(input.name))
        recipes[step].outputs.map(output => nodes.push(output.name))
    }

    nodes.splice(0, nodes.length, ...(new Set(nodes)))
    return(nodes)
}

function getWeight(step, recipes){
    return(recipes[step].inputs.length/recipes[step].outputs.length)
}

export default GetPairs;