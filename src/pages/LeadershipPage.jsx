import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ContentCard from '../components/contentCard/ContentCard';
import { UPDATE_CURRENT_PAGE_TITLE } from '../store/constants';
import NotFound from './errors/notFound';

const propTypes = {
  setHeaderTitle: PropTypes.func.isRequired,
  leadershipData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const PAGE_TITLE = 'Leadership';

const LeadershipPage = ({ setHeaderTitle, leadershipData }) => {
  let renderContent;

  React.useEffect(() => {
    setHeaderTitle(PAGE_TITLE)
  }, [setHeaderTitle]);

  if (leadershipData.length) {
    renderContent = (
      <Grid container spacing={5}>
        {
          leadershipData.map(data => (
            <Grid key={data.key} item xs={4}>
              <ContentCard
                header={data.name}
                subheader={data.position}
                mainContent={(
                  <Typography variant="body2" color="textSecondary" component="p">
                    {data.bio}
                  </Typography>
                )}
              />
            </Grid>
          ))
        }
      </Grid>
    )
  }
  else {
    renderContent = <NotFound resource={PAGE_TITLE} />
  }

  return renderContent;
};

LeadershipPage.defaultProps = {
  leadershipData: []
};

LeadershipPage.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  setHeaderTitle: title => dispatch({ type: UPDATE_CURRENT_PAGE_TITLE, currentPageTitle: title })
});

export default connect(undefined, mapDispatchToProps)(LeadershipPage);
