import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import Switch from '@material-ui/core/Switch';

const SettingsDialog = React.memo(function SettingsDialog(props) {
  const { onClose, open } = props;
  const [state, setState] = React.useState({
    checked: props.themeType === 'dark' ? true : false,
  });

  const handleChange = (name) => (event) => {
    props.handleTheme();
    setState({ ...state, [name]: event.target.checked });
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Dark Theme
          <Switch checked={state.checked} onChange={handleChange('checked')} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
});

export default SettingsDialog;
