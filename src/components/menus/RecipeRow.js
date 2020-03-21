import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControlSmall: {
    margin: theme.spacing(1),
    maxWidth: 100,
  },
});

const regAnyNumber = /^-?\d+\.?\d*$/;
const regWholeNumber = /^\d+$/;

class RecipeRow extends Component {
  constructor(props) {
    super(props);

    this.unitLabelRef = React.createRef();
    this.state = {
      unitLabelWidth: 0,
      item: this.props.item,
    };
  }

  handleQuantity = (event) => {
    const value = Number(event.target.value);
    if (value >= 1 && regWholeNumber.test(value)) {
      let item = this.state.item;
      item.quantity = value;
      this.setState({ item });
      this.props.handleUpdateItems(this.props.id, this.state.item);
    }
  };

  handleUnit = (event) => {
    const value = event.target.value;
    let item = this.state.item;
    item.unit = value;
    this.setState({ item });
    this.props.handleUpdateItems(this.props.id, this.state.item);
  };

  handleName = (event) => {
    const value = event.target.value;
    let item = this.state.item;
    item.name = value;
    this.setState({ item });
    this.props.handleUpdateItems(this.props.id, this.state.item);
  };

  componentDidMount() {
    this.setState({ unitLabelWidth: this.unitLabelRef.current.offsetWidth });
  }

  render() {
    return (
      <>
        <FormControl className={this.props.classes.formControlSmall}>
          <TextField
            error={!regAnyNumber.test(this.props.item.quantity)}
            label="Quantity"
            required
            type="number"
            value={this.state.item.quantity.toString()}
            variant="outlined"
            onChange={this.handleQuantity}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          className={this.props.classes.formControlSmall}>
          <InputLabel ref={this.unitLabelRef}>Unit</InputLabel>
          <Select
            labelWidth={this.state.unitLabelWidth}
            label="Unit"
            placeholder="b"
            value={this.state.item.unit}
            onChange={this.handleUnit}>
            <MenuItem value="b">b</MenuItem>
            <MenuItem value="mb">mb</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={this.props.classes.formControl}>
          <TextField
            error={this.props.item.name.length === 0}
            label="Item Name"
            required
            type="string"
            value={this.state.item.name}
            variant="outlined"
            onChange={this.handleName}
          />
        </FormControl>
        <br />
      </>
    );
  }
}

export default withStyles(styles)(RecipeRow);
