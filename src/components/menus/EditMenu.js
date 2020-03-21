import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Infinite from 'react-infinite';
import RecipeRow from './RecipeRow';

import { TierNames } from '../../data';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControlSmall: {
    margin: theme.spacing(1),
    maxWidth: 100,
  },
}));

function pushDefault(array, n) {
  let newArray = array;
  if (array.length < n) {
    for (let i = array.length; i < n; i++) {
      newArray.push({ name: '', quantity: 1, unit: 'b' });
    }
  } else {
    newArray = newArray.slice(0, n);
  }

  return newArray;
}

function updatedRecipe(
  isEu,
  step,
  machineName,
  machineTier,
  overclock,
  rft,
  time,
  inputs,
  outputs
) {
  let recipe = {
    step: step,
    machineName: machineName,
    machineTier: machineTier,
    overclock: overclock,
    rft: isEu ? rft * 4 : rft,
    time: time,
    inputs: inputs,
    outputs: outputs,
    targetMachines: 1,
  };

  return recipe;
}

const EditMenu = React.memo(function EditMenu(props) {
  const classes = useStyles();
  const [isEu, setIsEu] = React.useState(false);
  const [machineName, setMachineName] = React.useState(
    props.rowData.machineName
  );
  const [machineTier, setMachineTier] = React.useState(
    props.rowData.machineTier
  );
  const [overclock, setOverclock] = React.useState(props.rowData.overclock);
  const [rft, setRft] = React.useState(props.rowData.rft);
  const [time, setTime] = React.useState(props.rowData.time);
  const [numInputs, setNumInputs] = React.useState(props.rowData.inputs.length);
  const [numOutputs, setNumOutputs] = React.useState(
    props.rowData.outputs.length
  );
  const [inputs, setInputs] = React.useState(
    props.rowData.inputs.slice(0, props.rowData.inputs.length)
  );
  const [outputs, setOutputs] = React.useState(
    props.rowData.outputs.slice(0, props.rowData.outputs.length)
  );
  const [valid, setValid] = React.useState(true);

  const regAnyNumber = /^-?\d+\.?\d*$/;
  const regWholeNumber = /^\d+$/;

  const tierLabel = React.useRef(null);
  const [tierLabelWidth, setTierLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setTierLabelWidth(tierLabel.current.offsetWidth);
  }, []);

  const handleNumRft = (value) => {
    if (value >= 0) {
      setRft(value);
    }
  };

  const handleNumTime = (value) => {
    if (value >= 0) {
      setTime(value);
    }
  };

  const handleNumInputs = (value) => {
    if (value >= 0 && value <= 100 && regWholeNumber.test(value)) {
      setNumInputs(value);
      setInputs((prevInputs) => pushDefault(prevInputs, value));
      setValid(false);
    }
  };

  const handleNumOutputs = (value) => {
    if (value >= 0 && value <= 100 && regWholeNumber.test(value)) {
      setNumOutputs(value);
      setOutputs((prevOutputs) => pushDefault(prevOutputs, value));
      setValid(false);
    }
  };

  const handleUpdateMachineName = (value) => {
    setMachineName(value);

    if (value.length === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleUpdateInputs = (id, item) => {
    let newInputs = inputs;
    newInputs[id] = item;
    setInputs(newInputs);

    let valid = true;
    newInputs.forEach((input) => {
      if (input.name.length === 0) {
        valid = valid && false;
      }
    });

    setValid(valid);
  };

  const handleUpdateOutputs = (id, item) => {
    let newOutputs = outputs;
    newOutputs[id] = item;
    setOutputs(newOutputs);

    let valid = true;
    newOutputs.forEach((output) => {
      if (output.name.length === 0) {
        valid = valid && false;
      }
    });

    setValid(valid);
  };

  const handleUpdateRecipes = () => {
    let recipes = props.recipes;
    let index = recipes.indexOf(props.rowData);

    if (valid) {
      recipes[index] = updatedRecipe(
        isEu,
        props.rowData.step,
        machineName,
        machineTier,
        overclock,
        rft,
        time,
        inputs,
        outputs
      );
      props.handleUpdate(recipes);
      props.handleClose();
    }
  };

  return (
    <>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>Recipe information:</DialogContentText>
        <FormControl className={classes.formControl}>
          <TextField
            label="Machine Name"
            error={machineName.length === 0}
            placeholder="Macerator"
            required
            value={machineName}
            variant="outlined"
            onChange={(event) => handleUpdateMachineName(event.target.value)}
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={tierLabel}>Machine Tier</InputLabel>
          <Select
            label="Machine Tier"
            labelWidth={tierLabelWidth}
            value={machineTier}
            onChange={(event) => setMachineTier(event.target.value)}>
            {TierNames.map((tier, index) => (
              <MenuItem key={index} value={index}>
                {tier}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={overclock === true}
              onChange={() => setOverclock(!overclock)}
              value={overclock}
              color="primary"
            />
          }
          label="Overclock"
          labelPlacement="top"
        />
        <FormControl className={classes.formControlSmall}>
          <TextField
            error={!regAnyNumber.test(rft)}
            label={isEu ? 'EU/t' : 'RF/t'}
            placeholder={rft.toString()}
            required
            type="number"
            value={rft}
            variant="outlined"
            onChange={(event) => handleNumRft(Number(event.target.value))}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={isEu === true}
              onChange={() => setIsEu(!isEu)}
              value={isEu}
              color="primary"
            />
          }
          label="Use EU/t"
          labelPlacement="top"
        />
        <FormControl className={classes.formControlSmall}>
          <TextField
            error={!regAnyNumber.test(time)}
            label="Time (s)"
            placeholder={time.toString()}
            required
            type="number"
            value={time}
            variant="outlined"
            onChange={(event) => handleNumTime(Number(event.target.value))}
          />
        </FormControl>
        <FormControl className={classes.formControlSmall}>
          <TextField
            error={!regWholeNumber.test(numInputs)}
            label="# Inputs"
            placeholder={numInputs.toString()}
            required
            type="number"
            value={numInputs}
            variant="outlined"
            onChange={(event) => handleNumInputs(Number(event.target.value))}
          />
        </FormControl>
        <FormControl className={classes.formControlSmall}>
          <TextField
            error={!regWholeNumber.test(numOutputs)}
            label="# Outputs"
            placeholder={numOutputs.toString()}
            required
            type="number"
            value={numOutputs}
            variant="outlined"
            onChange={(event) => handleNumOutputs(Number(event.target.value))}
          />
        </FormControl>

        <Divider style={{ margin: '12px 0' }} />

        <Grid
          container
          direction="row"
          justify="space-between"
          alignitems="center">
          <Grid item xs={6}>
            <DialogContentText>
              Inputs: {inputs.length === 0 ? 'This recipe has no inputs.' : ''}
            </DialogContentText>
          </Grid>
          <Grid item xs={6}>
            <DialogContentText>
              Outputs:
              {outputs.length === 0 ? ' This recipe has no outputs.' : ''}
            </DialogContentText>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignitems="center">
          <Grid item xs={6}>
            <Infinite
              containerHeight={
                inputs.length * 72 > (window.innerHeight * 3) / 5
                  ? (window.innerHeight * 3) / 5
                  : inputs.length === 0
                  ? 72
                  : inputs.length * 72
              }
              elementHeight={72}>
              {inputs.map((input, index) => (
                <RecipeRow
                  key={'input' + index}
                  id={index}
                  item={input}
                  handleUpdateItems={handleUpdateInputs}
                />
              ))}
            </Infinite>
          </Grid>
          <Grid item xs={6}>
            <Infinite
              containerHeight={
                outputs.length * 72 > (window.innerHeight * 3) / 5
                  ? (window.innerHeight * 3) / 5
                  : outputs.length === 0
                  ? 72
                  : outputs.length * 72
              }
              elementHeight={72}>
              {outputs.map((output, index) => (
                <RecipeRow
                  key={'output' + index}
                  id={index}
                  item={output}
                  handleUpdateItems={handleUpdateOutputs}
                />
              ))}
            </Infinite>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleUpdateRecipes} color="default" disabled={!valid}>
          Save
        </Button>
        <Button onClick={props.handleClose} color="default">
          Close
        </Button>
      </DialogActions>
    </>
  );
});

export default EditMenu;
