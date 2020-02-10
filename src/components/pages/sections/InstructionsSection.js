import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

const InstructionsSection = () => {
  return (
    <MDBRow>
        <MDBCol>
            <MDBCard className="card-body">
                <MDBCardTitle className="text-center">Instructions</MDBCardTitle>
                <MDBCardText>
                    Add items below.
                </MDBCardText>
            </MDBCard>
        </MDBCol>
    </MDBRow>
  )
}

export default InstructionsSection;

