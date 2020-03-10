import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';

const SettingsMenu = React.memo(function SettingsMenu(props) {
  return (
    <>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          A production chain calculator inspired by the{' '}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://kirkmcdonald.github.io/">
            Kirk McDonald calculator
          </Link>{' '}
          for Factorio. Please ask questions and report bugs at{' '}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/SimonNguyen/ProductionChain">
            GitHub
          </Link>
          .
        </DialogContentText>
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
