import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ContentCard from '../components/contentCard/ContentCard';
import { UPDATE_CURRENT_PAGE_TITLE } from '../store/constants';

const propTypes = {
  setHeaderTitle: PropTypes.func.isRequired,
};

const LeadershipPage = ({ setHeaderTitle }) => {
  React.useEffect(() => {
    setHeaderTitle('Leadership')
  }, [setHeaderTitle]);

  let items = [];

  for (let i = 0; i < 5; i++) {
    items.push(i);
  }

  return (
    <Grid container spacing={5}>
      {
        items.map(itemKey => (
          <Grid key={itemKey} item xs={4}>
            <ContentCard
              header="Test Card"
              subheader="Andrew Givens"
              mainContent={(
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a test card to test the cards ability to card correctly. Hopefully it cards in the right card way.
                </Typography>
              )}
            />
          </Grid>
        ))
      }
    </Grid>
  );
};

LeadershipPage.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  setHeaderTitle: title => dispatch({ type: UPDATE_CURRENT_PAGE_TITLE, currentPageTitle: title })
});

export default connect(undefined, mapDispatchToProps)(LeadershipPage);
