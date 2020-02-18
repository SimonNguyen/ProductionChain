import React, { Component } from 'react';
import { MDBBadge, MDBInput, MDBAlert } from 'mdbreact';
import * as data from './data';
import { ParseItems } from './helpers/RecipeHelpers';
const tierNames = data.TierNames;

class AddRecipe extends Component {
    constructor() {
        super();
        this.state = {
            tier: tierNames[0],
            overclock: false,
            errorAlert: "invisible",
            errorText: " "
        };
    }

    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
            [inputName]: nextValue,
            errorAlert: "invisible"
        });
    }

    handleSelectChange = (inputName, selectValue) => {
        this.setState({
            [inputName]: selectValue
        });
    }

    handleDataValidation = () => {
        let isValid = true;
        let rawRecipe = this.state;
        for (const property in rawRecipe) {
            if (rawRecipe[property] === null || rawRecipe[property] === "") {
                isValid = false;
            }
        }
        if (isValid && Object.keys(rawRecipe).length === 9) {
            let inputList = [];
            let outputList = [];
            try {
                inputList = ParseItems(rawRecipe.rawInput);
                outputList = ParseItems(rawRecipe.rawOutput);

                for (let index in inputList) {
                    if (isNaN(inputList[index].quantity)) {
                        isValid = false;
                    }
                }

                for (let index in outputList) {
                    if (isNaN(outputList[index].quantity)) {
                        isValid = false;
                    }
                }

                for (let index in inputList) {
                    if (!(inputList[index].unit.toLowerCase() === "mb" || inputList[index].unit.toLowerCase() === "b")) {
                        isValid = false;
                    }
                }

                for (let index in outputList) {
                    if (!(outputList[index].unit.toLowerCase() === "mb" || outputList[index].unit.toLowerCase() === "b")) {
                        isValid = false;
                    }
                }
            }
            catch (error) {
                isValid = false;
            }

            if (isValid) {
                let newRecipe = {
                    machine: rawRecipe.machine,
                    tier: rawRecipe.tier,
                    overclock: rawRecipe.overclock,
                    rft: rawRecipe.rft,
                    time: rawRecipe.time,
                    inputs: [...inputList],
                    outputs: [...outputList]
                }
                this.props.onAdd(newRecipe);
            }
            else {
                this.setState({
                    errorAlert: "visible",
                    errorText: "Invalid: Check item format"
                });
            }
        }
        else {
            this.setState({
                errorAlert: "visible",
                errorText: "Invalid: Missing info."
            });
        }
    }

    render() {
        //this builds the options list for tiers
        return (
            <React.Fragment>
                <tr>
                    <th key="stepAdd"></th>
                    <th key="machineAdd">
                        <MDBInput
                            type="text"
                            className="form-control-sm"
                            id="machineText"
                            label="Machine"
                            getValue={this.handleInputChange("machine")}
                        />
                    </th>
                    <th key="tierAdd" className="align-middle">
                        <select
                            className="browser-default custom-select"
                            id="tierSelect"
                            value={this.state.tier}
                            onChange={(e) => this.handleSelectChange("tier", e.target.value)}
                        >
                            {tierNames.map((tier) =>
                                <option key={"tier:" + tier} value={tier}>{tier}</option>)}
                        </select>
                    </th>
                    <th key="overclockAdd" className="align-middle">
                        <select
                            className="browser-default custom-select"
                            id="overclockSelect"
                            value={this.state.overclock}
                            onChange={(e) => this.handleSelectChange("overclock", e.target.value)}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                    </th>
                    <th key="rftAdd">
                        <MDBInput
                            type="number"
                            step="o.o1"
                            min="0"
                            className="form-control-sm"
                            id="RfTText"
                            label="RF/T"
                            getValue={this.handleInputChange("rft")}
                        />
                    </th>
                    <th key="timeAdd">
                        <MDBInput
                            type="number"
                            step="o.o1"
                            min="0"
                            className="form-control-sm"
                            id="timeText"
                            label="time (s)"
                            getValue={this.handleInputChange("time")}
                        />
                    </th>
                    <th></th>
                    <th key="inputItemAdd">
                        <MDBInput
                            type="text"
                            className="form-control-sm"
                            id="inputItemsText"
                            label="Input"
                            getValue={this.handleInputChange("rawInput")}
                        />
                    </th>
                    <th key="outputItemAdd">
                        <MDBInput
                            type="text"
                            className="form-control-sm"
                            id="outputItemsText"
                            label="Output"
                            getValue={this.handleInputChange("rawOutput")}
                        />
                    </th>
                    <th></th>
                    <th key="errorAdd" className="align-middle">
                        <MDBAlert
                            color="danger"
                            className={this.state.errorAlert}
                            id="errorAlert"
                        >
                            {this.state.errorText}
                        </MDBAlert>
                    </th>
                    <th></th>
                    <th key="modifyAdd" className="align-middle">
                        <MDBBadge
                            tag="a"
                            color="light"
                            size="sm"
                            className="m-sm-1"
                            onClick={() => this.handleDataValidation()}
                        >Add</MDBBadge>
                    </th>
                </tr>
            </React.Fragment>
        )
    }
}

export default AddRecipe
