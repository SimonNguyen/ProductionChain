import React from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import data from "./data";

const TableSection = () => {
    return (
        <MDBRow>
            <MDBCol>
                <MDBCard>
                    <MDBCardBody>
                        <MDBTable responsiveMd hover striped>
                            <MDBTableHead color="blue lighten-4">
                                <tr>
                                    {
                                        data.Headers.map(h => {
                                            return (
                                                <th key={h.name}>{h.label}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    data.Recipes.map((r, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{r.step}</th>
                                                <th>{r.machine}</th>
                                                <th>{r.tier}</th>
                                                <th>{r.overclock.toString()}</th>
                                                <th>{r.rft}</th>
                                                <th>{Number(r.time).toPrecision(2)}</th>
                                                <th>
                                                    {
                                                        r.inputs.map((n, index) => {
                                                            return (
                                                                <p key={index}>{n.quantity + n.unit + " " + n.name}</p>
                                                            )
                                                        })}
                                                </th>
                                                <th>
                                                    {
                                                        r.outputs.map((o, index) => {
                                                            return (
                                                                <p key={index}>{o.quantity + o.unit + " " + o.name}</p>
                                                            )
                                                        })}
                                                </th>
                                            </tr>
                                        )
                                    })
                                }
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default TableSection;

