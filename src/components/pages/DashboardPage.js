import React from 'react';
import InformationSection from './sections/InformationSection';
import TableSection from './sections/TableSection';
import GetPairs from './sections/calculator';

const DashboardPage = () => {
    GetPairs();

    return (
        <React.Fragment>
            <InformationSection />
            <TableSection />
        </React.Fragment>
    )
}

export default DashboardPage;