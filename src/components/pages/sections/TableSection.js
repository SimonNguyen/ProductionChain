import React, { Component } from 'react';
import { MDBBadge, MDBCard, MDBCardBody, MDBInput, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import data from "./data";

class TableSection extends Component {
    state = {
        headers: data.Headers.map(h => {
            return (h.label)
        }),
        recipes: data.Recipes.map(r => {
            return r
        })
    }

    handleDelete = recipeId => {
        const recipes = this.state.recipes.filter(r => r.step !== recipeId);
        this.setState({ recipes });
    };

    render() {
        return (
            <React.Fragment>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBTable responsive hover striped>
                                    <MDBTableHead color="blue lighten-4">
                                        {
                                            (this.state.headers.map(header => (
                                                <th className="align-middle text-uppercase font-weight-bold">{header}</th>
                                            )))
                                        }
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
                                                    time={recipe.time}
                                                    inputs={recipe.inputs}
                                                    outputs={recipe.outputs}
                                                    onDelete={this.handleDelete}
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

class Recipe extends Component {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <th>{this.props.step}</th>
                    <th>{this.props.machine}</th>
                    <th>{this.props.tier}</th>
                    <th>{this.props.overclock.toString()}</th>
                    <th>{this.props.rft}</th>
                    <th>{Number(this.props.time).toPrecision(2)}</th>
                    <th>
                        {
                            this.props.inputs.map((n, index) => {
                                return (
                                    <div key={index}>
                                        <b>{n.quantity + n.unit}</b>
                                        {" " + n.name}
                                    </div>
                                )
                            })}
                    </th>
                    <th>
                        {
                            this.props.outputs.map((o, index) => {
                                return (
                                    <div key={index}>
                                        <b>{o.quantity + o.unit}</b>
                                        {" " + o.name}
                                    </div>
                                )
                            })}
                    </th>
                    <th>
                        <MDBBadge
                            color="danger"
                            size="sm"
                            className="float-right"
                            onClick={() => this.props.onDelete(this.props.step)}
                        >X</MDBBadge>
                    </th>
                </tr>
            </React.Fragment>
        )
    }
}

export default TableSection;

