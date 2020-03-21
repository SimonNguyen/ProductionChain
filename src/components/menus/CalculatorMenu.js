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
import { MachineRequirements, CalculateTarget } from '../utils/graph';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControlSmall: {
    margin: theme.spacing(1),
    maxWidth: 100,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const CalculatorMenu = React.memo(function CalculatorMenu(props) {
  const classes = useStyles();
  const [requirements, setRequirements] = React.useState(
    MachineRequirements(props.recipes, props.graph)
  );
  const [targetMachines, setTargetMachines] = React.useState(1);
  const [targetItem, setTargetItem] = React.useState(
    Object.keys(requirements.outputs).length !== 0
      ? Object.keys(requirements.outputs)[0]
      : ''
  );
  const [targetQuantity, setTargetQuantity] = React.useState(
    Object.keys(requirements.outputs).length !== 0
      ? requirements.outputs[targetItem].quantity
      : 0
  );
  const [targetRatio, setTargetRatio] = React.useState(
    Object.keys(requirements.outputs).length !== 0
      ? targetQuantity / requirements.outputs[targetItem].time
      : 0
  );
  const [targetOps, setTargetOps] = React.useState(targetRatio);
  const [targetStored, setTargetStored] = React.useState([]);
  const [targetLabelWidth, setTargetLabelWidth] = React.useState(0);

  const targetLabel = React.useRef(null);
  React.useEffect(() => {
    if (props.recipes.length !== 0) {
      setTargetLabelWidth(targetLabel.current.offsetWidth);
    }
  }, [props.recipes.length]);

  const handleOps = (value) => {
    setTargetOps(value);
    setTargetMachines(value / targetRatio);
  };

  const handleMachines = (value) => {
    setTargetMachines(value);
    setTargetOps(value * targetRatio);
  };

  const handleItem = (value) => {
    let quantity = requirements.outputs[value].quantity;
    setTargetItem(value);
    setTargetQuantity(quantity);
    setTargetRatio(quantity / requirements.outputs[value].time);

    if (typeof targetStored[value] !== 'undefined') {
      setTargetOps(targetStored[value].targetOps);
      setTargetMachines(targetStored[value].targetMachines);
    }
  };

  const handleTarget = () => {
    props.graph.setNodeAttribute(
      requirements.outputs[targetItem].node,
      'targetMachines',
      targetMachines
    );

    if (typeof targetStored[targetItem] === 'undefined') {
      let targets = targetStored;
      targets[targetItem] = {
        targetOps: targetOps,
        targetMachines: targetMachines,
      };
      setTargetStored(targets);
    } else {
      setTargetOps(targetStored[targetItem].targetOps);
      setTargetMachines(targetStored[targetItem].targetMachines);
    }
  };

  const handleCalculate = () => {
    let calculatedGraph = props.graph.copy();
    Object.entries(requirements.outputs)
      .sort()
      .forEach(([key, value]) => CalculateTarget(calculatedGraph, value.node));

    setRequirements(MachineRequirements(props.recipes, calculatedGraph));
  };

  const regAnyPositiveNumber = /^\d+\.?\d*$/;

  return (
    <>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        {props.recipes.length !== 0 ? (
          <>
            <DialogContentText>
              The default setting for the calculator is a single machine
              producing the final product. If you require more or less product,
              adjust the machines or outputs per second. Once you have set
              custom targets, press the 'calculate' button to redetermine the
              requirements for the recipe.
            </DialogContentText>
            <Grid container direction="row" alignItems="center">
              <FormControl className={classes.formControl}>
                <TextField
                  error={
                    !regAnyPositiveNumber.test(targetOps) || targetOps === 0
                  }
                  label="Output per second"
                  placeholder="1"
                  required
                  type="number"
                  value={targetOps}
                  variant="outlined"
                  onChange={(event) => handleOps(Number(event.target.value))}
                />
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  error={
                    !regAnyPositiveNumber.test(targetMachines) ||
                    targetMachines === 0
                  }
                  label="Number of machines"
                  placeholder="1"
                  required
                  type="number"
                  value={targetMachines}
                  variant="outlined"
                  onChange={(event) =>
                    handleMachines(Number(event.target.value))
                  }
                />
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={targetLabel}>Target Output</InputLabel>
                <Select
                  label="Target Output"
                  labelWidth={targetLabelWidth}
                  value={targetItem}
                  onChange={(event) => handleItem(event.target.value)}>
                  {Object.entries(requirements.outputs)
                    .sort()
                    .map(([key, value]) => (
                      <MenuItem key={'select' + key} value={key}>
                        {key}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <div>
                <Button
                  className={classes.margin}
                  onClick={handleTarget}
                  color="default"
                  variant="outlined">
                  Set Target
                </Button>
                <Button
                  className={classes.margin}
                  onClick={handleCalculate}
                  color="default"
                  variant="outlined">
                  Calculate
                </Button>
              </div>
            </Grid>
            <Divider style={{ margin: '12px 0' }} />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignitems="center">
              <Grid item xs={3}>
                <DialogContentText>Machines per Step</DialogContentText>
              </Grid>
              <Grid item xs={3}>
                <DialogContentText>Machine Totals</DialogContentText>
              </Grid>
              <Grid item xs={2}>
                <DialogContentText>Inputs/s</DialogContentText>
              </Grid>
              <Grid item xs={2}>
                <DialogContentText>Outputs/s</DialogContentText>
              </Grid>
              <Grid item xs={2}>
                <DialogContentText>Power Consumed</DialogContentText>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignitems="center">
              <Grid item xs={3}>
                {Object.entries(requirements.machineSteps).map(
                  ([key, value]) => (
                    <React.Fragment key={key}>
                      Step {key} : {value} <br />
                    </React.Fragment>
                  )
                )}
              </Grid>
              <Grid item xs={3}>
                {Object.entries(requirements.machineTotals)
                  .sort()
                  .map(([key, value]) => (
                    <React.Fragment key={key}>
                      {key} : {value} <br />
                    </React.Fragment>
                  ))}
              </Grid>
              <Grid item xs={2}>
                {Object.entries(requirements.inputs)
                  .sort()
                  .map(([key, value]) => (
                    <React.Fragment key={key}>
                      {key} :{' '}
                      {(
                        (value.quantity / value.time) *
                        value.targetMachines
                      ).toFixed(2)}
                      <br />
                    </React.Fragment>
                  ))}
              </Grid>
              <Grid item xs={2}>
                {Object.entries(requirements.outputs)
                  .sort()
                  .map(([key, value]) => (
                    <React.Fragment key={key}>
                      {key} :{' '}
                      {(
                        (value.quantity / value.time) *
                        value.targetMachines
                      ).toFixed(2)}
                      <br />
                    </React.Fragment>
                  ))}
              </Grid>
              <Grid item xs={2}>
                RF/t: {requirements.rft} <br />
                EU/t: {requirements.rft / 4}
              </Grid>
            </Grid>
          </>
        ) : (
          <DialogContentText>
            No recipe information to calculate.
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="default">
          Close
        </Button>
      </DialogActions>
    </>
  );
});

export default CalculatorMenu;
