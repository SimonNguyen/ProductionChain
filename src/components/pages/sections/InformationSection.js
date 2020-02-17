import React, { Component } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

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
                        </MDBCardText>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className="card-body">
                            <MDBCardTitle className="text-center">Settings</MDBCardTitle>
                            <MDBCardText className="text-center">
                                TODO: Input numMachines, numBlocksPerMin, selectedBlock
                            </MDBCardText>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </React.Fragment>
        )
    }
}

export default InformationSection;

