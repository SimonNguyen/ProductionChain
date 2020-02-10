import React from 'react';
import InstructionsSection from './sections/InstructionsSection';
import TableSection from './sections/TableSection';

const DashboardPage =  () => {
  return (
    <React.Fragment>
      <InstructionsSection />
      <TableSection />
    </React.Fragment>
  )
}

export default DashboardPage;