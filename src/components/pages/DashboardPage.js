import React, { Component } from 'react';
import data from './sections/data';
import exampleRecipes from './sections/example';
import { Overclock, GenerateRecipeGraph } from './sections/helpers/RecipeHelpers';
import { BuildOptions, CalculateRatio, OutputRecipes } from './sections/helpers/UIHelpers';
import InformationSection from './sections/InformationSection';
import SankeySection from './sections/SankeySection';
import TableSection from './sections/TableSection';

class DashboardPage extends Component {
    constructor() {
        super()

        this.state = {
            headers: data.Headers.map(headers => {
                return (headers.label)
            }),
            recipes: CalculateRatio(exampleRecipes.Recipes),
            targets: {
                "item": {
                    step: 9,
                    name: "Polymer Clay",
                    ratio: 1/3
                },
                "machines": 1,
                "bps": 1/3
            },
            labels: BuildOptions(exampleRecipes.Recipes)
        }
    }

    handleDelete = recipeStep => {
        const state = this.state;
        state.recipes = state.recipes.filter(r => Number(r.step) !== recipeStep);

        for (let index in state.recipes) {
            state.recipes[index].step = index;
            state.recipes[index].outputs.map(output => (
                output.step = index
            ))
        }

        if (recipeStep === state.targets.item.step) {
            state.targets.item.step = null;
            state.targets.item.name = "";
            state.targets.item.ratio = 0;
            state.targets.bps = 0;
            state.targets.machines = 0;
            state.targets.disable = true;
        }

        this.setState(state);
    };

    handleOverclock = (recipeId, status) => {
        let recipes = this.state.recipes;
        recipes[recipeId].overclock = status;

        let results = Overclock(recipes[recipeId].rft / 4, recipes[recipeId].tier, recipes[recipeId].time * 20);
        recipes[recipeId].rftoc = results.eut * 4;
        recipes[recipeId].timeoc = results.ticks / 20;
        recipes[recipeId].efficiencyoc =
            100 * (recipes[recipeId].rft * recipes[recipeId].time) /
            (recipes[recipeId].rftoc * recipes[recipeId].timeoc);

        let graph = GenerateRecipeGraph(recipes, this.state.targets);
        recipes = OutputRecipes(graph, recipes);

        this.setState({ recipes });
    };

    handleTiers = (recipeId, status) => {
        let recipes = this.state.recipes;
        recipes[recipeId].tier = status;

        let results = Overclock(recipes[recipeId].rft / 4, recipes[recipeId].tier, recipes[recipeId].time * 20);
        recipes[recipeId].rftoc = results.eut * 4;
        recipes[recipeId].timeoc = results.ticks / 20;
        recipes[recipeId].efficiencyoc =
            100 * (recipes[recipeId].rft * recipes[recipeId].time) /
            (recipes[recipeId].rftoc * recipes[recipeId].timeoc);

        let graph = GenerateRecipeGraph(recipes, this.state.targets);
        recipes = OutputRecipes(graph, recipes);

        this.setState({ recipes })
    };

    handleSwapDown = recipeStep => {
        if (recipeStep < this.state.recipes.length - 1) {
            let recipes = this.state.recipes;
            console.log(this.state.recipes);
            console.log(recipes);
            let currentItem = recipes[recipeStep];
            let nextItem = recipes[recipeStep + 1];

            currentItem.step = recipeStep + 1;
            currentItem.outputs.map(output => (
                output.step = recipeStep + 1
            ));

            nextItem.step = recipeStep;
            nextItem.outputs.map(output => (
                output.step = recipeStep
            ));

            recipes[recipeStep] = nextItem;
            recipes[recipeStep + 1] = currentItem;

            this.setState({ recipes });
        }
    };

    handleSwapUp = recipeStep => {
        if (recipeStep > 0) {
            let recipes = this.state.recipes;
            let currentItem = recipes[recipeStep];
            let nextItem = recipes[recipeStep - 1];

            currentItem.step = recipeStep - 1;
            currentItem.outputs.map(output => (
                output.step = recipeStep - 1
            ));

            nextItem.step = recipeStep;
            nextItem.step = recipeStep;
            nextItem.outputs.map(output => (
                output.step = recipeStep
            ));

            recipes[recipeStep] = nextItem;
            recipes[recipeStep - 1] = currentItem;

            this.setState({ recipes });
        }
    };

    handleAdd = newRecipe => {
        let recipes = this.state.recipes;
        let nextStep = this.state.recipes.length;

        recipes.push(
            {
                step: nextStep,
                machine: newRecipe.machine,
                tier: newRecipe.tier,
                overclock: newRecipe.overclock,
                rft: newRecipe.rft,
                time: newRecipe.time,
                efficiency: 100,
                inputs: [...newRecipe.inputs],
                outputs: [...newRecipe.outputs]
            }
        );

        recipes = CalculateRatio(recipes);

        this.setState({ recipes });
    };

    handleSettingChange = (update, type = "name") => {
        let targets = this.state.targets;
        if (targets.item.name === "") {
            if (type === "name") {
                targets.item.name = update;
                targets.item.ratio = update.ratio;
                targets.item.step = update.step;
                targets.machines = 1;
                targets.bps = targets.item.ratio.toFixed(2);
                targets.disable = false;
            }
        }
        else if (type === "name") {
            targets.item.name = update;
            targets.item.ratio = update.ratio;
            targets.item.step = update.step;
            targets.machines = 1;
            targets.bps = (targets.machines * targets.item.ratio).toFixed(2);
        }
        else if (type === "machine") {
            if (update <= 0) {
                targets.machines = 0;
                targets.bps = 0;
            }
            else {
                targets.machines = update;
                targets.bps = (targets.machines * targets.item.ratio).toFixed(2);
            }
        }
        else {
            if (update <= 0) {
                targets.bps = 0;
                targets.machines = 0;
            }
            else {
                targets.bps = update.toFixed(2);
                targets.machines = update / targets.item.ratio;
            }
        }

        this.setState({ targets });
        let recipes = this.state.recipes;
        recipes[targets.item.step].targetMachines = targets.machines;
        let graph = GenerateRecipeGraph(this.state.recipes, this.state.targets);
        recipes = OutputRecipes(graph, this.state.recipes);
        this.setState({ recipes });
    };

    render() {
        return (
            <React.Fragment>
                <InformationSection
                    outputs={this.state.labels}
                    targets={this.state.targets}
                    handleSettingChange={this.handleSettingChange}
                />
                <TableSection
                    headers={this.state.headers}
                    recipes={this.state.recipes}
                    handleDelete={this.handleDelete}
                    handleTiers={this.handleTiers}
                    handleOverclock={this.handleOverclock}
                    handleSwapDown={this.handleSwapDown}
                    handleSwapUp={this.handleSwapUp}
                    handleAdd={this.handleAdd}
                    handleMachineSetting={this.handleMachineSetting}
                />
                <SankeySection recipes={this.state.recipes} targets={this.state.targets} />
            </React.Fragment>
        )
    } changes
}

export default DashboardPage;