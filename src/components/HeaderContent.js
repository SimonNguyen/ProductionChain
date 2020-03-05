import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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

const HeaderContent = ({ classes }) => (
  <>
    <Typography noWrap color={'textSecondary'} className={classes.header}>
      Production Chain
    </Typography>
  </>
);

export default withStyles(styles)(HeaderContent);
