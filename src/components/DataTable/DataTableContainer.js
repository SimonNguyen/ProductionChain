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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import DataTableCell from './DataTableCell';
import * as data from '../../data/data';
const tierNames = data.TierNames;

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
      <Paper variant="outlined" my={2}>
        <TableContainer>
          <Table size="small" stickyHeader>
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
                  <TableCell>
                    <Select
                      id="select"
                      value={recipe.tier}
                      onChange={(e) =>
                        this.props.onChangeTier(recipe.step, e.target.value)
                      }>
                      {tierNames.map((tier) => (
                        <MenuItem key={tier + recipe.step} value={tier}>
                          {tier}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Switch
                      value={recipe.step}
                      checked={recipe.overclock}
                      color="primary"
                      onChange={(e) => this.props.onChangeOC(recipe.step)}
                    />
                  </TableCell>
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
      </Paper>
    );
  }
}

export default DataTableContainer;
