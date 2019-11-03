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

const OpenProjectsPage = ({ setHeaderTitle }) => {
  React.useEffect(() => {
    setHeaderTitle('Open Projects')
  }, [setHeaderTitle]);

  let items = [];

  for (let i = 0; i < 10; i++) {
    items.push(i);
  }

  return (
    <Grid container spacing={5}>
      {
        items.map(itemKey => (
          <Grid key={itemKey} item xs={4}>
            <ContentCard
              expandable
              displayMedia
              menuOptions={[
                {
                  display: 'Sign Up'
                },
                {
                  display: 'View Repo'
                },
                {
                  display: 'Contact Team Lead'
                }
              ]}
              header="Test Card"
              subheader="Andrew Givens"
              mainContent={(
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a test card to test the cards ability to card correctly. Hopefully it cards in the right card way.
                </Typography>
              )}
              expandedContent={(
                <React.Fragment>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </React.Fragment>
              )}
            />
          </Grid>
        ))
      }
    </Grid>
  );
};

OpenProjectsPage.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  setHeaderTitle: title => dispatch({ type: UPDATE_CURRENT_PAGE_TITLE, currentPageTitle: title })
});

export default connect(undefined, mapDispatchToProps)(OpenProjectsPage);
