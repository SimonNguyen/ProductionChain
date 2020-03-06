import React, { Component } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import DataTableCell from './DataTableCell';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

class DataTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tier: this.props.recipe.tier,
      overclock: this.props.recipe.overclock,
    };
  }

  handleTier = (event) => {
    this.props.onChangeTier(this.props.recipe.step, event.target.value);
    this.setState({ tier: event.target.value });
  };

  handleOverclock = () => {
    this.props.onChangeOC(this.props.recipe.step);
    this.setState({ overclock: !this.state.overclock });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.tier !== nextState.tier ||
      this.state.overclock !== nextState.overclock
    );
  }

  render() {
    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(even)': {
          backgroundColor: theme.palette.background.default,
        },
      },
    }))(TableRow);

    return (
      <StyledTableRow key={this.props.recipe.step}>
        <TableCell>{this.props.recipe.step}</TableCell>
        <TableCell>{this.props.recipe.machine}</TableCell>
        <TableCell>
          <Select
            id="select"
            value={this.state.tier}
            onChange={this.handleTier}>
            {this.props.tierNames.map((tier) => (
              <MenuItem key={tier + this.props.recipe.step} value={tier}>
                {tier}
              </MenuItem>
            ))}
          </Select>
        </TableCell>
        <TableCell>
          <Switch
            value={this.props.recipe.step}
            checked={this.props.recipe.overclock}
            color="primary"
            onChange={this.handleOverclock}
          />
        </TableCell>
        <TableCell>{this.props.recipe.rft}</TableCell>
        <TableCell>{this.props.recipe.time}</TableCell>
        <TableCell>{this.props.recipe.efficiency}</TableCell>
        <DataTableCell
          items={this.props.recipe.inputs}
          step={this.props.recipe.step}
        />
        <DataTableCell
          items={this.props.recipe.outputs}
          step={this.props.recipe.step}
        />
        <TableCell>{this.props.recipe.targetMachines}</TableCell>
        <DataTableCell
          items={this.props.recipe.targetInputs}
          step={this.props.recipe.step}
        />
        <DataTableCell
          items={this.props.recipe.targetOutputs}
          step={this.props.recipe.step}
        />
        <TableCell>No actions.</TableCell>
      </StyledTableRow>
    );
  }
}

export default DataTableRow;
