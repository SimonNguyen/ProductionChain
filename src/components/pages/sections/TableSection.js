import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import { Overclock } from './helpers/RecipeHelpers'
import Recipe from './Recipe';

class TableSection extends Component {
    state = {
        headers: this.props.headers,
        recipes: this.props.recipes.map(r => { return r })
    }

    handleDelete = recipeStep => {
        const recipes = this.state.recipes.filter(r => r.step !== recipeStep);
        this.setState({ recipes });
    };

    handleOverclock = (recipeId, status) => {
        const recipes = this.state.recipes;
        recipes[recipeId].overclock = status;

        var results = Overclock(recipes[recipeId].rft, recipes[recipeId].tier, recipes[recipeId].time);
        recipes[recipeId].rftoc = results.rft;
        recipes[recipeId].timeoc = results.time;
        recipes[recipeId].efficiencyoc = 100 * (recipes[recipeId].rft * recipes[recipeId].time) / (results.rft * results.time);
        this.setState({ recipes });
    }

    handleSwapDown = recipeStep => {
        if(recipeStep < this.state.recipes.length - 1){
            let recipes = this.state.recipes;
            let currentItem = recipes[recipeStep];
            let nextItem = recipes[recipeStep + 1];
            currentItem.step = recipeStep + 1;
            nextItem.step = recipeStep;
            recipes[recipeStep] = nextItem;
            recipes[recipeStep + 1] = currentItem;
            this.setState({ recipes })
        }
    }

    handleSwapUp = recipeStep => {
        if(recipeStep > 0){
            let recipes = this.state.recipes;
            let currentItem = recipes[recipeStep];
            let nextItem = recipes[recipeStep - 1];
            currentItem.step = recipeStep - 1;
            nextItem.step = recipeStep;
            recipes[recipeStep] = nextItem;
            recipes[recipeStep - 1] = currentItem;
            this.setState({ recipes })
        }
    }

    render() {
        return (
            <React.Fragment>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBTable responsive hover striped>
                                    <MDBTableHead color="blue lighten-4">
                                        <tr>
                                            {
                                                (this.state.headers.map((header, index) => (
                                                    <th key={"header" + index} className="align-middle text-uppercase font-weight-bold">{header}</th>
                                                )))
                                            }
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {
                                            this.state.recipes.map(recipe => (
                                                <Recipe
                                                    key={recipe.step}
                                                    step={recipe.step}
                                                    machine={recipe.machine}
                                                    tier={recipe.tier}
                                                    overclock={recipe.overclock}
                                                    rft={recipe.rft}
                                                    rftoc={recipe.rftoc}
                                                    time={recipe.time}
                                                    timeoc={recipe.timeoc}
                                                    efficiency={recipe.efficiency}
                                                    efficiencyoc={recipe.efficiencyoc}
                                                    inputs={recipe.inputs}
                                                    outputs={recipe.outputs}
                                                    onDelete={this.handleDelete}
                                                    onChange={this.handleOverclock}
                                                    onSwapUp={this.handleSwapUp}
                                                    onSwapDown={this.handleSwapDown}
                                                />
                                            ))
                                        }
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </React.Fragment>
        )
    }
}

export default TableSection;