import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import MaterialTable from 'material-table';
import { TierNames } from '../../data';

function DataTableCell(props) {
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

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Step',
          field: 'step',
          readonly: true,
          width: 50,
          editable: 'never',
        },
        {
          title: 'Machine Name',
          field: 'machineName',
          width: 125,
        },
        {
          title: 'Machine Tier',
          field: 'machineTier',
          lookup: Object.assign({}, TierNames),
          width: 100,
        },
        {
          title: 'Overclock',
          field: 'overclock',
          width: 75,
          type: 'boolean',
          render: (rowData) =>
            rowData.overclock
              .toString()
              .charAt(0)
              .toUpperCase() + rowData.overclock.toString().slice(1),
        },
        {
          title: 'RF/t',
          field: 'rft',
          width: 75,
          type: 'numeric',
        },
        {
          title: 'Time (s)',
          field: 'time',
          width: 75,
          type: 'numeric',
        },
        {
          title: 'Efficiency (%)',
          field: 'efficiency',
          width: 75,
          editable: 'never',
        },
        {
          title: 'Base Inputs',
          field: 'inputs',
          render: (rowData) => (
            <DataTableCell
              items={rowData.inputs}
              step={rowData.step}
              type={'input'}
            />
          ),
          width: 150,
        },
        {
          title: 'Base Outputs',
          field: 'outputs',
          render: (rowData) => (
            <DataTableCell
              items={rowData.outputs}
              step={rowData.step}
              type={'output'}
            />
          ),
          width: 150,
        },
        {
          title: 'Target Machines',
          field: 'targetMachines',
          width: 75,
          editable: 'never',
          type: 'numeric',
        },
        {
          title: 'Inputs per Second',
          field: 'targetInputs',
          width: 150,
          editable: 'never',
        },
        {
          title: 'Outputs per Second',
          field: 'targetOutputs',
          width: 150,
          editable: 'never',
        },
      ],
      data: this.props.recipes,
    };
  }

  render() {
    return (
      <Paper variant="outlined" my={2}>
        <MaterialTable
          title="Recipe List"
          columns={this.state.columns}
          data={this.state.data}
          options={{
            sorting: false,
            paging: true,
            pageSize: 10,
            tableLayout: 'fixed',
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    data.push(newData);
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    let data = this.state.data;
                    const index = data.indexOf(oldData);
                    data.splice(index, 1);
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              }),
          }}
        />
      </Paper>
    );
  }
}

export default DataTable;
