import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

const InformationSection = () => {
    return (
        <MDBRow>
            <MDBCol>
                <MDBCard className="card-body">
                    <MDBCardTitle className="text-center">Instructions</MDBCardTitle>
                    <MDBCardText>
                        GregTech machines should have their EU/t values converted to RF/t. The equivalent RF/t value is <code>4 * EUt</code>.
                        <br />Efficiency % is the energy efficiency of the overclock.
                    </MDBCardText>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className="card-body">
                    <MDBCardTitle className="text-center">Settings</MDBCardTitle>
                    <MDBCardText>
                        Add items to this section.
                    </MDBCardText>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default InformationSection;

