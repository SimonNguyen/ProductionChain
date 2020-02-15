import React from 'react';
import InformationSection from './sections/InformationSection';
import TableSection from './sections/TableSection';

const DashboardPage = () => {

    return (
        <React.Fragment>
            <InformationSection />
            <TableSection />
        </React.Fragment>
    )
}

export default DashboardPage;