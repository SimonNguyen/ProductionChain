import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Settings from './Settings';

const MenuDialog = ({
  isOpen,
  handleClose,
  title,
  size,
  contentType,
  confirmation,
  handleTheme,
  themeType,
}) => {
  return (
    <Dialog fullWidth maxWidth={size} open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {contentType === 'about' ? (
          <DialogContentText>
            A production chain calculator inspired by the Kirk McDonald factory
            calculator for Factorio.
          </DialogContentText>
        ) : contentType === 'import' ? (
          'Import'
        ) : contentType === 'clear' ? (
          'Clear'
        ) : contentType === 'add' ? (
          'Add'
        ) : contentType === 'settings' ? (
          <Settings handleTheme={handleTheme} themeType={themeType} />
        ) : (
          <DialogContentText>No valid content type selected.</DialogContentText>
        )}
      </DialogContent>
      {confirmation ? (
        <DialogActions>
          <Button onClick={() => handleClose('clear')} color="default">
            Accept
          </Button>
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
        </DialogActions>
      ) : (
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Close
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default MenuDialog;
