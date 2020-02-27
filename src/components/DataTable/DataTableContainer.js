import React, { Component } from 'react';
import {
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DataTableCell from './DataTableCell';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

class DataTableContainer extends Component {
  render() {
    return (
      <div style={{ maxWidth: '100%' }} my={2}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {this.props.headers.map((header) => (
                  <TableCell key={header.field}>{header.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.recipes.map((recipe) => (
                <StyledTableRow key={recipe.step}>
                  <TableCell>{recipe.step}</TableCell>
                  <TableCell>{recipe.machine}</TableCell>
                  <TableCell>{recipe.tier}</TableCell>
                  <TableCell>{recipe.overclock.toString()}</TableCell>
                  <TableCell>{recipe.rft}</TableCell>
                  <TableCell>{recipe.time}</TableCell>
                  <TableCell>{recipe.efficiency}</TableCell>
                  <DataTableCell items={recipe.inputs} step={recipe.step} />
                  <DataTableCell items={recipe.outputs} step={recipe.step} />
                  <TableCell>{recipe.targetMachines}</TableCell>
                  <DataTableCell
                    items={recipe.targetInputs}
                    step={recipe.step}
                  />
                  <DataTableCell
                    items={recipe.targetOutputs}
                    step={recipe.step}
                  />
                  <TableCell>No actions.</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default DataTableContainer;
