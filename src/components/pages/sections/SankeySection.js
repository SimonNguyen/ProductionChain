import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import { GenerateSankeyData } from './helpers/RecipeHelpers';
import Plot from 'react-plotly.js';
import { SizeMe } from 'react-sizeme';

class SankeySection extends Component {
    render() {
        let sankeyData = GenerateSankeyData(this.props.recipes);
        // console.log(sankeyData);
        // console.log(data.data);
        return (
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <SizeMe monitorHeight>
                                {
                                    ({ size }) =>
                                        <Plot
                                            data={sankeyData.data}
                                            layout={{ width: size.width, height: 900, title: "Production Chain Visual" }}
                                            config={{displayModeBar: false}}
                                        />
                                }
                            </SizeMe>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default SankeySection;