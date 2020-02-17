import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import { GenerateSankeyData, GenerateRecipeGraph } from './helpers/RecipeHelpers';
import Plot from 'react-plotly.js';

class SankeySection extends Component {
    render() {
        let sankeyData = GenerateSankeyData(this.props.recipes);
        let recipeGraph = GenerateRecipeGraph(this.props.recipes);
        return (
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody className="min-height">
                            <Plot
                                data={sankeyData.data}
                                layout={{ autosize: true, title: "Production Chain Visual" }}
                                config={{ displayModeBar: false, responsive: true }}
                                useResizeHandler={true}
                                className="plot"
                                style={{position:'center'}}
                            />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default SankeySection;