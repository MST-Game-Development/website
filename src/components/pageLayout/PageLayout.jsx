import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ThemeProvider } from '@material-ui/styles';
import { Box, CssBaseline, Divider, Hidden } from '@material-ui/core';
import { DRAWER_WIDTH } from '../constants';
import Logo from '../../assets/logo.png';
import customTheme from '../theme';

import SiteHeader from '../siteHeader/SiteHeader';

const propTypes = {
  /** The class name object provided by material ui's withStyles function */
  classes: PropTypes.object.isRequired,
  drawerOptions: PropTypes.arrayOf(
    PropTypes.shape({
      display: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      icon: PropTypes.element,
    })
  ),
  headerTitle: PropTypes.string,
};

const styles = (theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: '100%',
    width: '100%',
    background: `url(${Logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
  },
  drawerList: {
    width: DRAWER_WIDTH,
  },
  appHeader: {
    margin: DRAWER_WIDTH,
  },
  content: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: DRAWER_WIDTH,
    },
    marginLeft: '5rem',
    marginRight: '5rem',
    height: '75vh'
  },
});

const PageLayout = ({ classes, drawerOptions, children, headerTitle }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleDrawer = event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <SiteHeader title={headerTitle} className={classes.appHeader}>
        {children}
      </SiteHeader>
      <Hidden smDown>
        <SwipeableDrawer
          variant='permanent'
          open={isOpen}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          anchor="left"
          color="primary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Box className={classes.toolbar}>
            <Box className={classes.logo} />
          </Box>
          <Divider />
          <List component="nav" className={classes.drawerList}>
            {drawerOptions.map(option => (
              <MenuItem button key={option.key} component={Link} to={option.route}>
                {option.icon ? <ListItemIcon>{option.icon}</ListItemIcon> : <span />}
                <ListItemText primary={option.display} />
              </MenuItem>
            ))}
          </List>
        </SwipeableDrawer>
      </Hidden>
      <main className={classes.content}>
        <Box className={classes.toolbar} />
        {children}
      </main>
    </ThemeProvider>
  );
};

PageLayout.defaultProps = {
  drawerOptions: [],
};

PageLayout.propTypes = propTypes;

export default withStyles(styles)(PageLayout);
