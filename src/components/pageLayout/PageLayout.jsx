import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SiteHeader from '../siteHeader/SiteHeader';

const propTypes = {
  drawerOptions: PropTypes.arrayOf(
    PropTypes.shape({
      display: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      icon: PropTypes.element,
    })
  )
};

const PageLayout = ({ drawerOptions }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleDrawer = event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <SiteHeader title="Video Game Development">
      <SwipeableDrawer
          open={state.left}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
      >
        <List>
          {drawerOptions.map(option => (
            <ListItem>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.display} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </SiteHeader>
  );
};

PageLayout.propTypes = propTypes;

export default PageLayout;
