import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';

const Routes = () => (
  <content>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/schedule" component={SchedulePage} />
    </Switch>
  </content>
);

export const routeConfig = [
  {
    display: 'Home',
    key: 'index',
    route: '/'
  },
  {
    display: 'Schedule',
    key: 'schedule',
    route: '/schedule'
  }
];

export default Routes;