import React from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';

const TableSection = () => {
  const data = {
    columns: [
      {
        label: 'Machine Name',
        field: 'machineName'
      }
    ]
  }
  return (
    <MDBRow>
          <MDBCol>
              <MDBCard>
                  <MDBCardBody>
                    <MDBTable btn hover striped>
                      <MDBTableHead color="blue-grey lighten-4">
                        <tr>
                          <th>#</th>
                          <th>Machine Name</th>
                          <th>Machine Tier</th>
                          <th>EU/t</th>
                          <th>Time</th>
                          <th>Overclock</th>
                          <th>Inputs</th>
                          <th>Outputs</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>1</td>
                          <td>Pyrolyse Oven</td>
                          <td>LV</td>
                          <td>30</td>
                          <td>30</td>
                          <td>True</td>
                          <td>16 - Wood</td>
                          <td>1500 - Wood Gas</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Distillery</td>
                          <td>MV</td>
                          <td>64</td>
                          <td>4</td>
                          <td>True</td>
                          <td>1000 - Wood Gas</td>
                          <td>20 - Ethylene</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
      </MDBRow>
  )
}

export default TableSection;

