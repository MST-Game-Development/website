import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Iframe from 'react-iframe'
import { UPDATE_CURRENT_PAGE_TITLE } from '../store/constants';

const propTypes = {
  setHeaderTitle: PropTypes.func.isRequired,
};

const SchedulePage = ({ setHeaderTitle }) => {
  React.useEffect(() => {
    setHeaderTitle('Schedule')
  }, [setHeaderTitle]);

  return (
    <Iframe
      url="https://calendar.google.com/calendar/embed?src=mst.edu_574370cptjglrif0dn6ojf8b7k%40group.calendar.google.com&ctz=America%2FChicago"
      width="100%"
      height="100%"
      frameBorder="0"
      id="schedule"
      display="initial"
      position="relative"
    />
  )
};

SchedulePage.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  setHeaderTitle: title => dispatch({ type: UPDATE_CURRENT_PAGE_TITLE, currentPageTitle: title })
});

export default connect(undefined, mapDispatchToProps)(SchedulePage);
