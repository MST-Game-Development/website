import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { DRAWER_WIDTH } from '../constants';

const propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const styles = (theme) => ({
  appBar: ({
    [theme.breakpoints.up('md')]: {
      marginLeft: DRAWER_WIDTH,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${DRAWER_WIDTH})`,
      },
    },
  }),
  menuButton: ({
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }),
});

const SiteHeader = ({ classes, title, children }) => (
  <React.Fragment>
    <ElevationScroll>
      <AppBar className={classes.appBar} position='fixed'>
        <Toolbar>
          <Box display="flex" flexGrow={1} alignItems="center">
            <Typography variant="h6">{title}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar />
    
  </React.Fragment>
)

SiteHeader.defaultProps = {
  title: "",
};

SiteHeader.propTypes = propTypes;

export default withStyles(styles)(SiteHeader);
