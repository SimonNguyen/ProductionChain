import React, { Component } from 'react';
import { MDBBadge } from 'mdbreact';
import DisplayRFtTime from './DisplayRFtTime';

class Recipe extends Component {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <th key={"step" + this.props.step}>{this.props.step}</th>
                    <th key={"machine" + this.props.step}>{this.props.machine}</th>
                    <th key={"tier" + this.props.step}>{this.props.tier}</th>
                    <th key={"overclock" + this.props.step}>
                        <select className="browser-default custom-select" value={this.props.overclock}
                            onChange={(e) => this.props.onChange(this.props.step, e.target.value)}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </th>

                    <DisplayRFtTime
                        key={"display" + this.props.step}
                        rft={this.props.rft}
                        rftoc={this.props.rftoc}
                        time={this.props.time}
                        timeoc={this.props.timeoc}
                        efficiency={this.props.efficiency}
                        efficiencyoc={this.props.efficiencyoc}
                        overclock={this.props.overclock}
                    />

                    <th key={"inputs" + this.props.step}>
                        {
                            this.props.inputs.map((n, index) => {
                                return (
                                    <div key={index}>
                                        <b>{n.quantity + n.unit}</b>
                                        {" " + n.name}
                                    </div>
                                )
                            })}
                    </th>
                    <th key={"outputs" + this.props.step}>
                        {
                            this.props.outputs.map((o, index) => {
                                return (
                                    <div key={index}>
                                        <b>{o.quantity + o.unit}</b>
                                        {" " + o.name}
                                    </div>
                                )
                            })}
                    </th>
                    <th key={"remove" + this.props.step}>
                        <MDBBadge
                            color="danger"
                            size="sm"
                            className="float-right"
                            onClick={() => this.props.onDelete(this.props.step)}
                        >X</MDBBadge>
                    </th>
                </tr>
            </React.Fragment>
        )
    }
}

export default Recipe