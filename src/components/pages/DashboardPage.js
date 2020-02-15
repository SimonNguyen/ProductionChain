import React, { Component } from 'react';
import InformationSection from './sections/InformationSection';
import TableSection from './sections/TableSection';

import data from './sections/data';
import SankeySection from './sections/SankeySection';

class DashboardPage extends Component {
    constructor() {
        super()

        this.state = {
            headers: data.Headers.map(h => {
                return (h.label)
            }),
            recipes: data.Recipes.map(r => {
                return r
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <InformationSection />
                <TableSection headers={this.state.headers} recipes={this.state.recipes} />
                <SankeySection recipes={this.state.recipes} />
            </React.Fragment>
        )
    } changes
}

export default DashboardPage;