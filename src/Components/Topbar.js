import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  primary: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
  },
}));

const Topbar = ({ paletteType, onToggleDark }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.primary}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Production Chain
          </Typography>
          <div>
            <IconButton onClick={onToggleDark}>
              {paletteType === 'light' ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Topbar;
