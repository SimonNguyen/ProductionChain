import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const SettingsDialog = React.memo(function SettingsDialog(props) {
  const [state, setState] = React.useState({
    checked: props.themeType === 'dark' ? true : false,
  });

  const handleChange = (name) => (event) => {
    props.handleTheme();
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Typography color={'textPrimary'} variant="subtitle1">
        DARK THEME
      </Typography>
      <Switch checked={state.checked} onChange={handleChange('checked')} />
    </Grid>
  );
});

export default SettingsDialog;
