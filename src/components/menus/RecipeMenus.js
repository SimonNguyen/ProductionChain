import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ClearRecipesDialog = React.memo(function ClearRecipesDialog(props) {
  const handleClear = (event) => {
    props.handleClear();
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
