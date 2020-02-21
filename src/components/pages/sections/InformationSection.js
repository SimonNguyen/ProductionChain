import React, { Component } from 'react';
import { MDBCard, MDBCardTitle, MDBRow, MDBCol, MDBInput, MDBNavItem, MDBNav, MDBNavLink, MDBTabContent, MDBTabPane } from 'mdbreact';
import Select from 'react-select';

class InformationSection extends Component {
    constructor() {
        super();
        this.state = {
            active: "1",
        };
    }

    handleTabs = tab => e => {
        if (this.state.active !== tab) {
            this.setState({ active: tab });
        }
    };

    render() {
        return (
            <React.Fragment>
                <MDBRow>
                    <MDBCol>
                        <MDBCard className="white m-sm-1 p-1">
                            <MDBNav className="nav-tab m-sm-1">
                                <MDBNavItem>
                                    <MDBNavLink to="#" active={this.state.active === "1"} onClick={this.handleTabs("1")} roll="tab">
                                        EU/t
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" active={this.state.active === "2"} onClick={this.handleTabs("2")} roll="tab">
                                        Recycled Items
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" active={this.state.active === "3"} onClick={this.handleTabs("3")} roll="tab">
                                        Adding Recipes
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNav>
                            <MDBTabContent activeItem={this.state.active} className="pl-2">
                                <MDBTabPane tabId="1" role="tabpanel">
                                    <p className="mt-2">GregTech machines should have their EU/t values converted to RF/t. The equivalent RF/t value is <code>4 * EUt</code>.
                                    <br />Efficiency % is the energy efficiency of the overclock.</p>
                                </MDBTabPane>
                                <MDBTabPane tabId="2" role="tabpanel">
                                    <p className="mt-2">The production chain is not calculated with any recycled items in mind.
                                    The resultant production chain visual is not updated to show that the items are ignored.</p>
                                </MDBTabPane>
                                <MDBTabPane tabId="3" role="tabpanel" >
                                    <p className="mt-2">Item input/output format is [Quantity],[Unit],[item]; ...ext.
                                    <br /> -> Quantity is the number of units needed per operation
                                    <br /> -> Unit must be either b for block, or mb for millibuckets
                                    <br /> -> item is the name of the item.  This is case sensitive!
                                    <br /> Example: <code className="blue-text">1000, mb, Lava; 1000, mb, Water;</code></p>
                                </MDBTabPane>
                            </MDBTabContent>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className="card-body">
                            <MDBCardTitle className="text-center">Settings</MDBCardTitle>
                            <form>
                                <Select
                                    defaultInputValue={this.props.outputs.length !== 0 ? this.props.outputs[0].label : "No valid outputs." }
                                    onChange={(e) => this.props.handleSettingChange(e.value)}
                                    options={this.props.outputs.map(opt => ({label: opt.label, value: opt.value}))}
                                />
                                <MDBInput
                                    type="number"
                                    step="0.1"
                                    min="0.0"
                                    className="form-control-sm"
                                    disabled={false}
                                    id="targetItemOutputs"
                                    label="Target Items per Second"
                                    value={this.props.targets.bps}
                                    onChange={(e) => this.props.handleSettingChange(e.target.value, "item")}
                                />
                                <MDBInput
                                    type="number"
                                    step="1"
                                    min="0.00"
                                    className="form-control-sm"
                                    disabled={false}
                                    id="targetMachines"
                                    label="Target Machines"
                                    value={this.props.targets.machines}
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

