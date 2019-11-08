import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PageLayout from './components/pageLayout/PageLayout';
import Routes, { routeConfig } from './Routes';

App.propTypes = {
  pageTitle: PropTypes.string,
};

function App({ pageTitle }) {
  return (
    <HashRouter>
      <PageLayout headerTitle={pageTitle} drawerOptions={routeConfig}>
        <Routes />
      </PageLayout>
    </HashRouter>
  );
}

const mapStateToProps = state => ({
  pageTitle: state.currentPageTitle
});

export default connect(mapStateToProps)(App);
