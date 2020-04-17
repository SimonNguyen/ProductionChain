import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  header: {
    fontWeight: 700,
    minWidth: 0,
    fontSize: 18,
  },
  grow: {
    flexGrow: 1,
  },
});

const url = window.location.href;

const HeaderContent = ({ classes }) => (
  <Typography noWrap color={'textPrimary'} className={classes.header}>
    <Link href={url.substring(0, url.indexOf('?'))} color="inherit">
      Production Chain
    </Link>
  </Typography>
);

export default withStyles(styles)(HeaderContent);
