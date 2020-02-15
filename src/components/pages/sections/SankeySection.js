import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import { GetLinks, GetNodes, FixLinks } from './helpers/RecipeHelpers';
import { SizeMe } from 'react-sizeme';
import { Sankey } from 'react-vis';

class SankeySection extends Component {
    render() {
        let links = GetLinks(this.props.recipes);
        let nodes = GetNodes(links);
        links = FixLinks(links, nodes);
        return (
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <SizeMe>
                                {
                                    ({ size }) =>
                                        <Sankey
                                            color="blue"
                                            nodeWidth={15}
                                            nodePadding={50}
                                            align={'center'}
                                            nodes={nodes}
                                            links={links}
                                            width={size.width || 600}
                                            height={size.height || 600}
                                            layout={100}
                                            style={{
                                                links: {
                                                    opacity: .3,
                                                },
                                                labels: {
                                                    fontSize: '16px',
                                                    fontWeight: 700
                                                },
                                                rects: {
                                                    strokeWidth: 2,
                                                    stroke: '#121212',
                                                    opacity: .5,
                                                }
                                            }}
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