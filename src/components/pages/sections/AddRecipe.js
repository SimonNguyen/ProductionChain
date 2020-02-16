import React, { Component } from 'react';
import { MDBBadge, MDBInput, MDBAlert } from 'mdbreact';
import * as data from './data';
import { ParseItems } from './helpers/RecipeHelpers'
let tierNames = data.TierNames;

class AddRecipe extends Component {
    constructor() {
        super();
        this.state = {
            tier: tierNames[0],
            overclock: false,
            errorAlert: "invisible",
            errorText: ""
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

    handleDataValidation = (failMessage) => {
        let isValid = true;
        let rawRecipe = this.state;
        if (Object.keys(rawRecipe).length === 9) {
            let inputList = ParseItems(rawRecipe.rawInput);
            let outputList = ParseItems(rawRecipe.rawOutput);

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
                            label="Machine Name"
                            getValue={this.handleInputChange("machine")}
                        />
                    </th>
                    <th key="tierAdd">
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
                    <th key="overclockAdd">
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
                    <th>
                        <MDBAlert 
                            color="danger"
                            className={this.state.errorAlert}
                            id="errorAlert"
                        >
                            {this.state.errorText}
                        </MDBAlert>
                    </th>
                    <th key="inputItemAdd">
                        <MDBInput
                            type="text"
                            className="form-control-sm"
                            id="inputItemsText"
                            label="Input Items"
                            getValue={this.handleInputChange("rawInput")}
                        />
                    </th>
                    <th key="outputItemAdd">
                        <MDBInput
                            type="text"
                            className="form-control-sm"
                            id="outputItemsText"
                            label="Output Items"
                            getValue={this.handleInputChange("rawOutput")}
                        />
                    </th>
                    <th key="modifyAdd">
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
