import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';
import { TierNames } from '../../data';
import MenuDialog from '../menus/MenuDialog';

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
          editable: 'never',
          width: 100,
        },
        {
          title: 'Machine Name',
          field: 'machineName',
          width: 200,
        },
        {
          title: 'Machine Tier',
          field: 'machineTier',
          lookup: Object.assign({}, TierNames),
          width: 200,
        },
        {
          title: 'Overclock',
          field: 'overclock',
          type: 'boolean',
          customFilterAndSearch: (search, rowData) => {
            return (
              rowData.overclock.toString().toUpperCase() ===
              search.toUpperCase()
            );
          },
          width: 100,
        },
        {
          title: 'RF/t',
          field: 'rft',
          type: 'numeric',
          width: 100,
        },
        {
          title: 'Time (s)',
          field: 'time',
          type: 'numeric',
          width: 100,
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
      dialog: false,
      editable: [],
    };
  }

  handleDialogOpen = (rowData) => {
    this.setState({ editable: rowData });
    this.setState({ dialog: true });
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };

  render() {
    return (
      <Paper variant="outlined" my={2}>
        <MaterialTable
          columns={this.state.columns}
          data={Array.from(this.props.recipes)}
          options={{
            actionsColumnIndex: -1,
            maxBodyHeight: '77vh',
            paging: true,
            pageSizeOptions: [5, 10, 15, 20],
            showTitle: false,
            sorting: false,
            tableLayout: 'auto',
          }}
          editable={{
            // onRowUpdate: (newData, oldData) =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       {
            //         let recipes = this.state.recipes;
            //         let index = recipes.indexOf(oldData);
            //         recipes[index] = newData;
            //         this.setState({ recipes }, () => resolve());
            //         this.props.handleUpdate(recipes);
            //       }
            //       resolve();
            //     }, 1000);
            //   }),
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
                }, 200);
              }),
          }}
          actions={[
            {
              icon: 'arrow_upward',
              tooltip: 'Move up',
              onClick: (event, rowData) => {
                let recipes = [...this.state.recipes];
                let index = recipes.indexOf(rowData);

                if (index > 0) {
                  let temp = recipes[index - 1];
                  recipes[index - 1] = recipes[index];
                  recipes[index - 1].step = index - 1;
                  recipes[index] = temp;
                  recipes[index].step = index;
                }

                this.setState({ recipes });
                this.props.handleUpdate(recipes);
              },
            },
            {
              icon: 'arrow_downward',
              tooltip: 'Move down',
              onClick: (event, rowData) => {
                let recipes = [...this.state.recipes];
                let index = recipes.indexOf(rowData);

                if (index < recipes.length - 1) {
                  let temp = recipes[index + 1];
                  recipes[index + 1] = recipes[index];
                  recipes[index + 1].step = index + 1;
                  recipes[index] = temp;
                  recipes[index].step = index;
                }

                this.setState({ recipes });
                this.props.handleUpdate(recipes);
              },
            },
            {
              icon: 'edit',
              tooltip: 'Edit Recipe',
              onClick: (event, rowData) => {
                this.handleDialogOpen(rowData);
              },
            },
          ]}
        />
        <MenuDialog
          contentType={'edit'}
          size={'lg'}
          title={'Edit a recipe'}
          recipes={this.state.recipes}
          rowData={this.state.editable}
          isOpen={this.state.dialog}
          handleClose={this.handleDialogClose}
          handleUpdate={this.props.handleUpdate}
        />
      </Paper>
    );
  }
}

export default DataTable;
