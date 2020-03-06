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
import Settings from './menus/Settings';

function NavContent(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText
          primary={'About'}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ImportExportIcon />
        </ListItemIcon>
        <ListItemText
          primary={'Import/Export Recipe'}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <TableChartIcon />
        </ListItemIcon>
        <ListItemText
          primary={'Clear Recipes'}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PlaylistAddIcon />
        </ListItemIcon>
        <ListItemText
          primary={'Add Recipe'}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
      <Divider style={{ margin: '12px 0' }} />
      <ListItem button onClick={handleClickOpen}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText
          primary={'Settings'}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
      <Settings
        open={open}
        onClose={handleClose}
        handleTheme={props.handleTheme}
        themeType={props.themeType}
      />
    </List>
  );
}

NavContent.propTypes = {};
NavContent.defaultProps = {};

export default NavContent;
