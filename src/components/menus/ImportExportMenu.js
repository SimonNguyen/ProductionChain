import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { compress, decompress } from 'lzutf8';
import { Recipes } from '../../data';

const ImportExportMenu = React.memo(function ImportExportMenu(props) {
  const [data, setData] = React.useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleImport = () => {
    let array = data.split(',');
    let uint8array = Uint8Array.from(array);
    let recipes = JSON.parse(decompress(uint8array));
    props.handleUpdate(recipes);
  };

  const handleExport = () => {
    let jString = JSON.stringify(props.recipes);
    let compressedData = compress(jString);
    setData(compressedData.toString());
  };

  const handleDefaultImport = () => {
    let recipes = Recipes;
    props.handleUpdate(recipes);
  };

  return (
    <>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Paste a recipe string below to import a recipe.
          <br />
          <br />
          Alternatively, you may import a sample recipe:
        </DialogContentText>
        <Button
          onClick={handleDefaultImport}
          color="default"
          variant="outlined">
          Numismatic Generators
        </Button>
        <Divider style={{ margin: '12px 0' }} />
        <TextField
          multiline
          fullWidth
          size="medium"
          rowsMax="10"
          variant="outlined"
          value={data}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="default">
          Close
        </Button>
        <Button onClick={handleImport} color="default">
          Import
        </Button>
        <Button onClick={handleExport} color="default">
          Export
        </Button>
      </DialogActions>
    </>
  );
});

export default ImportExportMenu;
