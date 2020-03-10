import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
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
          customFilterAndSearch: (search, rowData) => {
            return (
              rowData.overclock.toString().toUpperCase() ===
              search.toUpperCase()
            );
          },
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
          width: 150,
          render: (rowData) => (
            <DataTableCell
              items={rowData.inputs}
              step={rowData.step}
              type={'input'}
            />
          ),
          editComponent: () => <Button variant="outlined">Modify</Button>,
          customFilterAndSearch: (search, rowData) => {
            let found = false;
            rowData.inputs.forEach((input) => {
              let values = Object.values(input);
              values.forEach((value) => {
                if (
                  value
                    .toString()
                    .toUpperCase()
                    .includes(search.toUpperCase())
                ) {
                  found = found || true;
                }
              });
            });

            return found;
          },
        },
        {
          title: 'Base Outputs',
          field: 'outputs',
          width: 150,
          render: (rowData) => (
            <DataTableCell
              items={rowData.outputs}
              step={rowData.step}
              type={'output'}
            />
          ),
          editComponent: () => <Button variant="outlined">Modify</Button>,
          customFilterAndSearch: (search, rowData) => {
            let found = false;
            rowData.outputs.forEach((output) => {
              let values = Object.values(output);
              values.forEach((value) => {
                if (
                  value
                    .toString()
                    .toUpperCase()
                    .includes(search.toUpperCase())
                ) {
                  found = found || true;
                }
              });
            });

            return found;
          },
        },
      ],
      recipes: Array.from(this.props.recipes),
    };
  }

  render() {
    return (
      <Paper variant="outlined" my={2}>
        <MaterialTable
          columns={this.state.columns}
          data={Array.from(this.props.recipes)}
          options={{
            sorting: false,
            paging: true,
            pageSizeOptions: [5, 10, 15, 20],
            tableLayout: 'fixed',
            actionsColumnIndex: -1,
            maxBodyHeight: '77vh',
            showTitle: false,
          }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    let recipes = this.state.recipes;
                    let index = recipes.indexOf(oldData);
                    recipes[index] = newData;
                    this.setState({ recipes }, () => resolve());
                    this.props.handleUpdate(recipes);
                  }
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    let recipes = [...this.state.recipes];
                    let index = recipes.indexOf(oldData);
                    recipes.splice(index, 1);

                    recipes.forEach((recipe, index) => {
                      recipe.step = index + 1;
                    });

                    this.setState({ recipes }, () => resolve());
                    this.props.handleUpdate(recipes);
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
