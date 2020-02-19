import React, { Component } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import Select from 'react-select';

class InformationSection extends Component {
    render() {
        return (
            <React.Fragment>
                <MDBRow>
                    <MDBCol>
                        <MDBCard className="card-body">
                            <MDBCardTitle className="text-center">Instructions</MDBCardTitle>
                            <MDBCardText>
                                GregTech machines should have their EU/t values converted to RF/t. The equivalent RF/t value is <code>4 * EUt</code>.
                            <br />Efficiency % is the energy efficiency of the overclock.
                            <br />Item input/output format is [Quantity],[Unit],[item]; ...ext.
                            <br /> -> Quantity is the number of units needed per operation
                            <br /> -> Unit must be either b for block, or mb for millibuckets
                            <br /> -> item is the name of the item.  This is case sensitive!
                            <br /> Example: 1000, mb, Lava; 1000, mb, Water;
                        </MDBCardText>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className="card-body">
                            <MDBCardTitle className="text-center">Settings</MDBCardTitle>
                            <form>
                                <Select
                                    onChange={(e) => this.props.handleSettingChange(e.value)}
                                    options={this.props.outputs.map(opt => ({label: opt.label, value: opt.value}))}
                                />
                                <MDBInput
                                    type="number"
                                    step="0.1"
                                    min="0.0"
                                    className="form-control-sm"
                                    id="targetItemOutputs"
                                    label="Target Items per Second"
                                    value = {this.props.targets.bps}
                                    onChange={(e) => this.props.handleSettingChange(e.target.value, "item")}
                                />
                                <MDBInput
                                    type="number"
                                    step="1"
                                    min="0.00"
                                    className="form-control-sm"
                                    id="targetMachines"
                                    label="Target Machines"
                                    value = {this.props.targets.machines}
                                    onChange={(e) => this.props.handleSettingChange(e.target.value, "machine")}
                                />
                            </form>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </React.Fragment>
        )
    }
}

export default InformationSection;

