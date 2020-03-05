import React from 'react';
import { TableCell } from '@material-ui/core';

function DataTableCell(props) {
  if (typeof props.items !== 'undefined') {
    return (
      <TableCell>
        {props.items.map((item) => (
          <div key={item.name + props.step}>
            <b>{item.quantity + item.unit}</b>
            {' ' + item.name}
          </div>
        ))}
      </TableCell>
    );
  } else {
    return <TableCell>No items set.</TableCell>;
  }
}

export default DataTableCell;
