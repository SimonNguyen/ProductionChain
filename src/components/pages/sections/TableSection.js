import React, { Component } from 'react';
import { MDBBadge, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import { OVERCLOCK } from './logic/Calculator.js'
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

        var results = OVERCLOCK(recipes[recipeId].rft, recipes[recipeId].tier, recipes[recipeId].time);
        recipes[recipeId].rftoc = results.rft;
        recipes[recipeId].timeoc = results.time;
        recipes[recipeId].efficiencyoc = 100 * (recipes[recipeId].rft * recipes[recipeId].time) / (results.rft * results.time);
        this.setState({ recipes });
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

class DisplayRFtTime extends Component {
    render() {
        const overclocked = this.props.overclock;
        var displayRFt = this.props.rft;
        var displayTime = this.props.time;
        var displayEfficiency = this.props.efficiency;

        if (overclocked === 'true') {
            displayRFt = this.props.rftoc;
            displayTime = this.props.timeoc;
            displayEfficiency = this.props.efficiencyoc;
        }
        return (
            <React.Fragment>
                <th key={"rft" + this.props.step}>{displayRFt}</th>
                <th key={"time" + this.props.step}>{Number(displayTime).toFixed(2)}</th>
                <th key={"efficiency" + this.props.step}>{Number(displayEfficiency).toFixed(2)}</th>
            </React.Fragment>
        );
    }
}

class Recipe extends Component {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <th key={"step" + this.props.step}>{this.props.step}</th>
                    <th key={"machine" + this.props.step}>{this.props.machine}</th>
                    <th key={"tier" + this.props.step}>{this.props.tier}</th>
                    <th key={"overclock" + this.props.step}>
                        <select className="browser-default custom-select" value={this.props.overclock}
                            onChange={(e) => this.props.onChange(this.props.step, e.target.value)}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </th>

                    <DisplayRFtTime
                        key={"display" + this.props.step}
                        rft={this.props.rft}
                        rftoc={this.props.rftoc}
                        time={this.props.time}
                        timeoc={this.props.timeoc}
                        efficiency={this.props.efficiency}
                        efficiencyoc={this.props.efficiencyoc}
                        overclock={this.props.overclock}
                    />
                    
                    <th key={"inputs" + this.props.step}>
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
                    <th key={"outputs" + this.props.step}>
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
                    <th key={"remove" + this.props.step}>
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