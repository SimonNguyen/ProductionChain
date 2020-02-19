import React, { Component } from 'react';
import data from './sections/data';
import { CalculateRatio, FindTarget, GetLabels, Overclock, GenerateRecipeGraph, OutputRecipes } from './sections/helpers/RecipeHelpers';
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
            recipes: CalculateRatio(data.Recipes),
            targets: {
                "settingsItem": {
                    step: null,
                    name: "",
                    ratio: 0
                },
                "settingsMachines": 0,
                "settingsItemValue": 0
            }

        }
    }

    handleDelete = recipeStep => {
        const recipes = this.state.recipes.filter(r => r.step !== recipeStep);
        let targets = this.state.targets;

        for (let index in recipes) {
            recipes[index].step = index;
        }

        if (recipeStep === targets.settingsItem.step) {
            targets.settingsItem.step = null;
            targets.settingsItem.name = "";
            targets.settingsItem.ratio = 0;
            targets.settingsItemValue = 0;
            targets.settingsMachines = 0;
        }

        this.setState({ recipes, targets });
        console.log(this.state);
    };

    handleOverclock = (recipeId, status) => {
        let recipes = this.state.recipes;
        recipes[recipeId].overclock = status;

        let results = Overclock(recipes[recipeId].rft, recipes[recipeId].tier, recipes[recipeId].time);
        recipes[recipeId].rftoc = results.rft;
        recipes[recipeId].timeoc = results.time;
        recipes[recipeId].efficiencyoc = 100 * (recipes[recipeId].rft * recipes[recipeId].time) / (results.rft * results.time);

        let graph = GenerateRecipeGraph(this.state.recipes, this.state.targets);
        recipes = OutputRecipes(graph, this.state.recipes)
        
        this.setState({ recipes });
    };

    handleTiers = (recipeId, status) => {
        const recipes = this.state.recipes;
        recipes[recipeId].tier = status;

        let results = Overclock(recipes[recipeId].rft, recipes[recipeId].tier, recipes[recipeId].time);
        recipes[recipeId].rftoc = results.rft;
        recipes[recipeId].timeoc = results.time;
        recipes[recipeId].efficiencyoc = 100 * (recipes[recipeId].rft * recipes[recipeId].time) / (results.rft * results.time);

        this.setState({ recipes })
    };

    handleSwapDown = recipeStep => {
        if (recipeStep < this.state.recipes.length - 1) {
            let recipes = this.state.recipes;
            let currentItem = recipes[recipeStep];
            let nextItem = recipes[recipeStep + 1];

            currentItem.step = recipeStep + 1;
            nextItem.step = recipeStep;
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
            nextItem.step = recipeStep;
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
        if (targets.settingsItem.name === "") {
            if (type === "name") {
                let newTarget = FindTarget(update, this.state.recipes);
                targets.settingsItem.name = update;
                targets.settingsItem.ratio = newTarget.ratio;
                targets.settingsItem.step = newTarget.step;
                targets.settingsMachines = 1;
                targets.settingsItemValue = 1 * targets.settingsItem.ratio;
            }
        }
        else if (type === "name") {
            let newTarget = FindTarget(update, this.state.recipes);
            targets.settingsItem.name = update;
            targets.settingsItem.ratio = newTarget.ratio;
            targets.settingsItem.step = newTarget.step;
            targets.settingsMachines = 1;
            targets.settingsItemValue = targets.settingsMachines * targets.settingsItem.ratio;
        }
        else if (type === "machine") {
            if (update <= 0) {
                targets.settingsMachines = 0;
                targets.settingsItemValue = 0;
            }
            else {
                targets.settingsMachines = update;
                targets.settingsItemValue = targets.settingsMachines * targets.settingsItem.ratio;
            }
        }
        else {
            if (update <= 0) {
                targets.settingsItemValue = 0;
            }
            else {
                targets.settingsItemValue = update;
                targets.settingsMachines = update / targets.settingsItem.ratio;
            }
        }

        this.setState({ targets });
        let recipes = this.state.recipes;
        recipes[targets.settingsItem.step].targetMachines = targets.settingsMachines;
        let graph = GenerateRecipeGraph(this.state.recipes, this.state.targets);
        recipes = OutputRecipes(graph, this.state.recipes)
        this.setState({ recipes });
    };

    render() {
        return (
            <React.Fragment>
                <InformationSection
                    outputs={GetLabels(this.state.recipes, "outputs")}
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