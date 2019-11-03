import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Placeholder from '../../assets/placeholder.png';

const propTypes = {
  classes: PropTypes.object.isRequired,
  expandable: PropTypes.bool.isRequired,
  menuOptions: PropTypes.arrayOf(PropTypes.shape({
    Display: PropTypes.string.isRequired
  })).isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  displayMedia: PropTypes.bool.isRequired,
  image: PropTypes.string,
  mediaTitle: PropTypes.string,
  mainContent: PropTypes.element.isRequired,
  expandedContent: PropTypes.element,
};

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

const ContentCard = ({
  classes,
  expandable,
  menuOptions,
  header,
  subheader,
  displayMedia,
  image,
  mediaTitle,
  mainContent,
  expandedContent,
 }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const handleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <React.Fragment>
      <Card>
        <CardHeader
          title={header}
          subheader={subheader}
          action={
            menuOptions.length
              ? (
                <IconButton onClick={event => setMenuAnchor(event.currentTarget)} aria-label="options">
                  <MoreVertIcon />
                </IconButton>
              )
              : undefined
          }
        />
        {displayMedia
          ? <CardMedia className={classes.media} image={image} title={mediaTitle} />
          : <div />
        }
        <CardContent>
          {mainContent}
        </CardContent>
        <CardActions>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          {
            expandable
              ? (
                <IconButton
                  className={clsx(classes.expand, {
                      [classes.expandOpen]: isExpanded,
                    })
                  }
                  onClick={handleExpansion}
                  aria-expanded={isExpanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              )
              : <span />
          }
        </CardActions>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            {expandedContent}
          </CardContent>
        </Collapse>
      </Card>
      <Menu
        id="simple-menu"
        anchorEl={menuAnchor}
        keepMounted
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
      >
        {menuOptions.map(option => (
          <MenuItem onClick={() => setMenuAnchor(null)}>{option.display}</MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

ContentCard.defaultProps = {
  expandable: false,
  menuOptions: [],
  subheader: '',
  displayMedia: false,
  image: Placeholder,
};

ContentCard.propTypes = propTypes;

export default withStyles(styles)(ContentCard);
