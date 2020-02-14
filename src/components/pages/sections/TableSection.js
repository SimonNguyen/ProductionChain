import React, { Component } from 'react';
import { MDBBadge, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBContainer } from 'mdbreact';
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

    handleDelete = recipeStep => {
        const recipes = this.state.recipes.filter(r => r.step !== recipeStep);
        this.setState({ recipes });
    };

    handleOverclock = (recipeId, status) => {
        const recipes = this.state.recipes;
        recipes[recipeId].overclock = status;
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
                                                <th key={"header"+index}className="align-middle text-uppercase font-weight-bold">{header}</th>
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
                                                    time={recipe.time}
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

class Recipe extends Component {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <th key={"step"+this.props.step}>{this.props.step}</th>
                    <th key={"machine"+this.props.step}>{this.props.machine}</th>
                    <th key={"tier"+this.props.step}>{this.props.tier}</th>
                    <th key={"overclock"+this.props.step}>
                        <select className="browser-default custom-select" value={this.props.overclock} 
                            onChange={(e) => this.props.onChange(this.props.step, e.target.value)}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </th>
                    <th key={"rft"+this.props.step}>{this.props.rft}</th>
                    <th key={"time"+this.props.step}>{Number(this.props.time).toPrecision(2)}</th>
                    <th key={"inputs"+this.props.step}>
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
                    <th key={"outputs"+this.props.step}>
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
                    <th key={"modify"+this.props.step}>
                        <MDBContainer>
                            <MDBBadge
                                tag="a"
                                color="light"
                                size="sm"
                                className="m-sm-1"
                                onClick={() => this.props.onSwapUp(this.props.step)}
                            >Up</MDBBadge>
                            <MDBBadge
                                tag="a"
                                color="light"
                                size="sm"
                                className="m-sm-1"
                                onClick={() => this.props.onSwapDown(this.props.step)}
                            >Down</MDBBadge>
                            <MDBBadge
                                tag="a"
                                color="danger"
                                size="sm"
                                className="m-sm-1"
                                onClick={() => this.props.onDelete(this.props.step)}
                            >X</MDBBadge>
                        </MDBContainer>
                    </th>
                </tr>
            </React.Fragment>
        )
    }
}

export default TableSection;