import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe'
import { Box, Typography } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.object.isRequired,
  resource: PropTypes.string.isRequired,
};

const styles =() => ({
  container: {
    height: '100%'
  }
});

const NotFound = ({ classes, resource }) => (
  <Box className={classes.container}>
    <Typography paragraph align="center" variant="h4" gutterBottom color="secondary">
      404 - Not Found
    </Typography>
    <Typography paragraph align="center" gutterBottom color="primary">
      Sorry we couldn't find any {resource}. Please enjoy Color Booper.
    </Typography>
    <Iframe url="https://colorbooper.s3.us-east-2.amazonaws.com/index.html"
      width="100%"
      height="100%"
      id="colorBooper"
      display="initial"
      position="relative"
    />
  </Box>
);

NotFound.defaultProps = {
  resource: 'content'
};

NotFound.propTypes = propTypes;

export default withStyles(styles)(NotFound);
