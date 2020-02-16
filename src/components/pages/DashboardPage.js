import React, { Component } from 'react';
import InformationSection from './sections/InformationSection';
import TableSection from './sections/TableSection';
import data from './sections/data';
import { Overclock } from './sections/helpers/RecipeHelpers'
import SankeySection from './sections/SankeySection';

class DashboardPage extends Component {
    constructor() {
        super()

        this.state = {
            headers: data.Headers.map(h => {
                return (h.label)
            }),
            recipes: data.Recipes.map(r => {
                return r
            })
        }
    }

    handleDelete = recipeStep => {
        const recipes = this.state.recipes.filter(r => r.step !== recipeStep);
        console.log(recipes);
        this.setState({ recipes });
    };

    handleOverclock = (recipeId, status) => {
        const recipes = this.state.recipes;
        recipes[recipeId].overclock = status;

        let results = Overclock(recipes[recipeId].rft, recipes[recipeId].tier, recipes[recipeId].time);
        recipes[recipeId].rftoc = results.rft;
        recipes[recipeId].timeoc = results.time;
        recipes[recipeId].efficiencyoc = 100 * (recipes[recipeId].rft * recipes[recipeId].time) / (results.rft * results.time);

        this.setState({ recipes });
    }

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
    }

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
    }

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

        this.setState({ recipes });
    }

    render() {
        return (
            <React.Fragment>
                <InformationSection />
                <TableSection
                    headers={this.state.headers}
                    recipes={this.state.recipes}
                    handleDelete={this.handleDelete}
                    handleOverclock={this.handleOverclock}
                    handleSwapDown={this.handleSwapDown}
                    handleSwapUp={this.handleSwapUp}
                    handleAdd={this.handleAdd}
                />
                <SankeySection recipes={this.state.recipes} />
            </React.Fragment>
        )
    } changes
}

export default DashboardPage;