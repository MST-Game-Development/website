import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const propTypes = {
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

const SiteHeader = ({ title, children }) => (
  <React.Fragment>
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Container>
      {children}
    </Container>
    <Toolbar />
  </React.Fragment>
)

SiteHeader.propTypes = propTypes;

export default SiteHeader;
