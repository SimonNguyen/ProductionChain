import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const RecipeMenu = React.memo(function RecipeMenu(props) {
  return (
    <>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter recipes below.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="default">
          Add
        </Button>
        <Button onClick={props.handleClose} color="default">
          Close
        </Button>
      </DialogActions>
    </>
  );
});

export default RecipeMenu;
