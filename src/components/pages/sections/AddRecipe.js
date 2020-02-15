import React, { Component } from 'react';
import { MDBBadge, MDBInput } from 'mdbreact';
import * as data from './data';
let tierNames = data.TierNames;

class AddRecipe extends Component {
    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
            [inputName]: nextValue
        });

        console.log(this.state);
    };
    render() {
        //this builds the options list for tiers
        let tiers = tierNames;
        let optionTiers = tiers.map((tier) =>
            <option value={tier}>{tier}</option>
        );

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
                        <select id="tierSelect" className="browser-default custom-select" getValue={this.handleInputChange("tier")}>
                            {optionTiers}
                        </select>
                    </th>
                    <th key="overclockAdd">
                        <select id="overclockSelect" className="browser-default custom-select" getValue={this.handleInputChange("overclock")}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </th>
                    <th key="rftAdd">
                        <MDBInput
                            type="text"
                            className="form-control-sm"
                            id="RfTText"
                            label="RF/T"
                            getValue={this.handleInputChange("rft")}
                        />
                    </th>
                    <th key="timeAdd">
                        <MDBInput
                            type="text"
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
                            label="{Quantity} {Unit} {Item}, ..."
                            getValue={this.handleInputChange("rawInput")}
                        />
                    </th>
                    <th key="outputItemAdd">
                        <MDBInput
                            type="text"
                            className="form-control-sm"
                            id="outputItemsText"
                            label="{Quantity} {Unit} {Item}, ..."
                            getValue={this.handleInputChange("rawOutput")}
                        />
                    </th>
                    <th key="modifyAdd">
                        <MDBBadge
                            tag="a"
                            color="light"
                            size="sm"
                            className="m-sm-1"
                            onClick={() => this.props.onAdd(this.state)}
                        >Add</MDBBadge>
                    </th>
                </tr>
            </React.Fragment>
        )
    }
}

export default AddRecipe
