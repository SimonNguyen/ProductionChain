import React from 'react';
export function DataTableCell(props) {
  return (
    <React.Fragment>
      {props.items.map((item) => (
        <div key={'_' + props.type + item.name + props.step}>
          {item.quantity + item.unit + ' ' + item.name}
        </div>
      ))}
    </React.Fragment>
  );
}
