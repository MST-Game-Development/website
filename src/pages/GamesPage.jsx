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
  gamesData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const PAGE_TITLE = 'Games';

const GamesPage = ({ setHeaderTitle, gamesData }) => {
  let renderContent;

  React.useEffect(() => {
    setHeaderTitle(PAGE_TITLE)
  }, [setHeaderTitle]);

  if(gamesData.length) {
    renderContent = (
      <Grid container spacing={5}>
        {
          gamesData.map(data => (
            <Grid key={data.key} item xs={4}>
              <ContentCard
                shareable
                expandable
                displayMedia
                header={data.title}
                subheader={data.lead}
                mainContent={(
                  <Typography variant="body2" color="textSecondary" component="p">
                    {data.shortDescription}
                  </Typography>
                )}
                expandedContent={(
                  <React.Fragment>
                    <Typography paragraph>Description:</Typography>
                    <Typography paragraph>
                      {data.longDescription}
                    </Typography>
                    <Typography paragraph>Technologies:</Typography>
                    <Typography paragraph>
                      {data.technologies}
                    </Typography>
                    <Typography paragraph>Team Members:</Typography>
                    <Typography paragraph>
                      {data.members}
                    </Typography>
                  </React.Fragment>
                )}
              />
            </Grid>
          ))
        }
      </Grid>
    );
  }
  else {
    renderContent = <NotFound resource={PAGE_TITLE} />
  }

  return renderContent;
};

GamesPage.defaultProps = {
  gamesData: []
}

GamesPage.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  setHeaderTitle: title => dispatch({ type: UPDATE_CURRENT_PAGE_TITLE, currentPageTitle: title })
});

export default connect(undefined, mapDispatchToProps)(GamesPage);
