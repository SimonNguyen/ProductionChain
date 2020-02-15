import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
import { GetPairs, GetNodes } from './helpers/RecipeHelpers';

class SankeySection extends Component {
    render() {
        let pairs = GetPairs(this.props.recipes);
        let nodes = GetNodes(pairs);
        console.log(nodes, pairs);
        return (
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default SankeySection;