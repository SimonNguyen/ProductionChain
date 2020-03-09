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

  const handleDialogOpen = (type, title) => {
    setTitle(title);
    setType(type);
    setOpen(true);
  };

  const handleDialogClose = (clear) => {
    props.handleClear(clear);
    setOpen(false);
  };

  return (
    <>
      <List>
        <ListItem button onClick={() => handleDialogOpen('about', 'About')}>
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
            handleDialogOpen('import', 'Import or export a recipe list')
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
              'Are you sure you want to clear all recipes?'
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
          onClick={() => handleDialogOpen('add', 'Add a recipe')}>
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
          onClick={() => handleDialogOpen('settings', 'Settings')}>
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
        isOpen={open}
        handleClose={handleDialogClose}
        title={title}
        contentType={type}
        confirmation={type === 'clear'}
        size="xs"
        handleTheme={props.handleTheme}
        themeType={props.themeType}
      />
    </>
  );
});

export default NavContent;
