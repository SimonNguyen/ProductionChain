import React, { Component } from 'react';

class DisplayRFtTime extends Component {
    render() {
        const overclocked = this.props.overclock;
        var displayRFt = this.props.rft;
        var displayTime = this.props.time;
        var displayEfficiency = this.props.efficiency;

        if (overclocked === 'true') {
            displayRFt = this.props.rftoc;
            displayTime = this.props.timeoc;
            displayEfficiency = this.props.efficiencyoc;
        }
        return (
            <React.Fragment>
                <th key={"rft" + this.props.step}>{displayRFt}</th>
                <th key={"time" + this.props.step}>{Number(displayTime).toFixed(2)}</th>
                <th key={"efficiency" + this.props.step}>{Number(displayEfficiency).toFixed(2)}</th>
            </React.Fragment>
        );
    }
}

export default DisplayRFtTime;