import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UPDATE_CURRENT_PAGE_TITLE } from '../store/constants';

const propTypes = {
  setHeaderTitle: PropTypes.func.isRequired,
};

const LeadershipPage = ({ setHeaderTitle }) => {
  React.useEffect(() => {
    setHeaderTitle('Leadership')
  }, [setHeaderTitle]);

  return <div>Leadership</div>
};

LeadershipPage.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  setHeaderTitle: title => dispatch({ type: UPDATE_CURRENT_PAGE_TITLE, currentPageTitle: title })
});

export default connect(undefined, mapDispatchToProps)(LeadershipPage);
