import React from 'react';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
  status: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired
}

const styles =() => ({
  container: {
    height: '100%',
    textAlign: '-webkit-center'
  },
  imageContainer: {
    maxWidth: '355px',
    maxHeight: '200px'
  }
});

const Error = ({ classes, status, message }) => (
  <Box className={classes.container}>
    <div className={classes.imageContainer}>
      <Image src='/images/gdc-error.png' aspectRatio={(16/9)} />
    </div>
    <Typography paragraph align="center" variant="h4" gutterBottom color="secondary">
      Status: {status}
    </Typography>
    <Typography paragraph align="center" gutterBottom color="primary">
      {message}
    </Typography>
  </Box>
)

Error.propTypes = propTypes;

Error.defaultProps = {
  status: 500,
  message: "Internal Server Error"
}

export default  withStyles(styles)(Error);
