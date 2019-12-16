import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import ContentCard from '../components/contentCard/ContentCard';
import { UPDATE_CURRENT_PAGE_TITLE } from '../store/constants';
import { getLeadershipData } from '../store/actions';
import NotFound from './errors/notFound';
import Error from '../components/error/Error';

const propTypes = {
  setHeaderTitle: PropTypes.func.isRequired,
  leadershipData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.oneOf(
        ["President", "Vice President", "Treasurer", "Secretary", "Public Relations", "Mechanical Lead", "Website Manager"]
      ).isRequired,
      bio: PropTypes.string.isRequired,
    }
  )).isRequired,
  leadershipError: PropTypes.shape({
    status: PropTypes.number,
    message: PropTypes.string
  }).isRequired,
  fetchLeadershipData: PropTypes.func.isRequired,
};

const PAGE_TITLE = 'Leadership';

const LeadershipPage = ({ setHeaderTitle, leadershipData, leadershipError, fetchLeadershipData }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFailed, setIsFailed] = React.useState(false);

  let renderContent;

  React.useEffect(() => {
    setHeaderTitle(PAGE_TITLE);
  }, [setHeaderTitle])

  React.useEffect(() => {
    if(!leadershipData.length && !leadershipError.status) {
      fetchLeadershipData();
    } else if(leadershipError.status) {
      setIsFailed(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [setHeaderTitle, fetchLeadershipData, leadershipData, leadershipError, setIsLoading]);

  if (isFailed) {
    renderContent = <Error status={leadershipError.status} message={leadershipError.message} />
  }
  else if (isLoading) {
    renderContent = <LinearProgress color="secondary" />
  }
  else if (leadershipData.length) {
    renderContent = (
      <Grid container spacing={5} alignContent='center'>
        {
          leadershipData.map(data => (
            <Grid key={data.position} item xs={4} style={{ minWidth: '20em', maxWidth: '25em' }}>
              <ContentCard
                header={data.name}
                subheader={data.position}
                mainContent={(
                  <Typography variant="body2" color="textSecondary" component="p" style={{ whiteSpace: "pre-wrap" }}>
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

const mapStateToProps = state => ({
  leadershipData: state.leadershipData,
  leadershipError: state.leadershipApiError
});

const mapDispatchToProps = dispatch => ({
  setHeaderTitle: title => dispatch({ type: UPDATE_CURRENT_PAGE_TITLE, currentPageTitle: title }),
  fetchLeadershipData: () => getLeadershipData(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LeadershipPage);
