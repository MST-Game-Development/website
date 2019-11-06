import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleIcon from '@material-ui/icons/People';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import InfoIcon from '@material-ui/icons/Info';

// Pages
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import GamesPage from './pages/GamesPage';
import OpenProjectsPage from './pages/OpenProjectsPage';
import LeadershipPage from './pages/LeadershipPage';
import NotFound from './pages/errors/notFound';

export const routeConfig = [
  {
    display: 'Home',
    key: 'index',
    route: '/',
    icon: <HomeIcon />,
    component: HomePage
  },
  {
    display: 'Schedule',
    key: 'schedule',
    route: '/schedule',
    icon: <DateRangeIcon />,
    component: SchedulePage
  },
  {
    display: 'Open Projects',
    key: 'open_projects',
    route: '/open-projects',
    icon: <InfoIcon />,
    component: OpenProjectsPage
  },
  {
    display: 'Games',
    key: 'games',
    route: '/games',
    icon: <VideogameAssetIcon />,
    component: GamesPage
  },
  {
    display: 'Leadership',
    key: 'leadership',
    route: '/leadership',
    icon: <PeopleIcon />,
    component: LeadershipPage
  }
];

if (window.location.hostname === 'mst-game-development.github.io') {
  routeConfig.forEach(config => {
    config.route = `/website${config.route}`;
  });
}

const Routes = () => (
  <content>
    <Switch>
      {
        routeConfig.map(config => (
          <Route key={config.key} exact path={config.route} component={config.component} />
        ))
      }
      <Route component={NotFound} />
    </Switch>
  </content>
);

export default Routes;