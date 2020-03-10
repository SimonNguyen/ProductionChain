import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const SettingsMenu = React.memo(function SettingsMenu(props) {
  const [state, setState] = React.useState({
    checked: props.themeType === 'dark' ? true : false,
  });

  const handleChange = (name) => (event) => {
    props.handleTheme();
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Typography color={'textPrimary'} variant="subtitle1">
            DARK THEME
          </Typography>
          <Switch checked={state.checked} onChange={handleChange('checked')} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="default">
          Close
        </Button>
      </DialogActions>
    </>
  );
});

export default SettingsMenu;
