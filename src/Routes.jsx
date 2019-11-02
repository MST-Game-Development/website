import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';

// Pages
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';

export const routeConfig = [
  {
    display: 'Home',
    key: 'index',
    route: '/',
    icon: <HomeIcon />
  },
  {
    display: 'Schedule',
    key: 'schedule',
    route: '/schedule',
    icon: <DateRangeIcon />
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
      <Route exact path={routeConfig[0].route} component={HomePage} />
      <Route exact path={routeConfig[1].route} component={SchedulePage} />
    </Switch>
  </content>
);

export default Routes;