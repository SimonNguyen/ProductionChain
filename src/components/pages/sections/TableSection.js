import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';

class TableSection extends Component {
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
                                                (this.props.headers.map((header, index) => (
                                                    <th key={"header" + index} className="align-middle text-uppercase font-weight-bold">{header}</th>
                                                )))
                                            }
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {
                                            this.props.recipes.map(recipe => (
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
                                                    onDelete={this.props.handleDelete}
                                                    onChangeTier={this.props.handleTiers}
                                                    onChange={this.props.handleOverclock}
                                                    onSwapUp={this.props.handleSwapUp}
                                                    onSwapDown={this.props.handleSwapDown}
                                                />
                                            ))
                                        }
                                        {
                                            //adds a line for adding a recipe
                                            <AddRecipe
                                                onAdd={this.props.handleAdd}
                                            />
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