import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TableChartIcon from '@material-ui/icons/TableChart';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MenuDialog from './menus/MenuDialog';

const NavContent = React.memo(function NavContent(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [type, setType] = React.useState('');
  const [size, setSize] = React.useState('xs');

  const handleDialogOpen = (type, title, size) => {
    setType(type);
    setTitle(title);
    setSize(size);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    props.handleClear();
    setOpen(false);
  };

  return (
    <>
      <List>
        <ListItem
          button
          onClick={() => handleDialogOpen('about', 'About', 'xs')}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText
            primary={'About'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            handleDialogOpen('import', 'Import or export a recipe list', 'sm')
          }>
          <ListItemIcon>
            <ImportExportIcon />
          </ListItemIcon>
          <ListItemText
            primary={'Import/Export Recipe'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            handleDialogOpen(
              'clear',
              'Are you sure you want to clear all recipes?',
              'xs'
            )
          }>
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText
            primary={'Clear Recipes'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleDialogOpen('add', 'Add a recipe', 'lg')}>
          <ListItemIcon>
            <PlaylistAddIcon />
          </ListItemIcon>
          <ListItemText
            primary={'Add Recipe'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
        <Divider style={{ margin: '12px 0' }} />
        <ListItem
          button
          onClick={() => handleDialogOpen('settings', 'Settings', 'xs')}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary={'Settings'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      </List>
      <MenuDialog
        contentType={type}
        isOpen={open}
        recipes={props.recipes}
        size={size}
        themeType={props.themeType}
        title={title}
        handleClear={handleClear}
        handleClose={handleDialogClose}
        handleRecipes={props.handleRecipes}
        handleTheme={props.handleTheme}
      />
    </>
  );
});

export default NavContent;
