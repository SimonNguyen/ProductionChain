import React, { Component } from 'react';
import { MDBBadge, MDBInput } from 'mdbreact';
import * as data from './data';
let tierNames = data.TierNames;

class AddRecipe extends Component {
    constructor(){
        super();
        this.state = {
            tier: tierNames[0],
            overclock: false
        };
    }

    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
            [inputName]: nextValue
        });
    }

    handleSelectChange = (inputName, selectValue) => {
        this.setState({
            [inputName]: selectValue
        });
    }
    render() {
        //this builds the options list for tiers
        let optionTiers = tierNames.map((tier) =>
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
                        <select 
                            className="browser-default custom-select"
                            value={this.state.tier}
                            onChange={(e) => this.handleSelectChange("tier", e.target.value)}
                        >
                            {optionTiers}
                        </select>
                    </th>
                    <th key="overclockAdd">
                        <select 
                            className="browser-default custom-select"
                            value={this.state.overclock} 
                            onChange={(e) => this.handleSelectChange("overclock", e.target.value)}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
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
                            onClick={() => this.props.onAdd(this.state)}
                        >Add</MDBBadge>
                    </th>
                </tr>
            </React.Fragment>
        )
    }
}

export default AddRecipe
