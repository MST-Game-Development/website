import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UPDATE_CURRENT_PAGE_TITLE } from '../store/constants';

const propTypes = {
  setHeaderTitle: PropTypes.func.isRequired,
};

const OpenProjectsPage = ({ setHeaderTitle }) => {
  React.useEffect(() => {
    setHeaderTitle('Open Projects')
  }, [setHeaderTitle]);

  return <div>Open Projects</div>
};

OpenProjectsPage.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  setHeaderTitle: title => dispatch({ type: UPDATE_CURRENT_PAGE_TITLE, currentPageTitle: title })
});

export default connect(undefined, mapDispatchToProps)(OpenProjectsPage);
