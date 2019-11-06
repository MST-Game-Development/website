import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PageLayout from './components/pageLayout/PageLayout';
import Routes, { routeConfig } from './Routes';

App.propTypes = {
  pageTitle: PropTypes.string,
};

function App({ pageTitle }) {
  return (
    <BrowserRouter>
      <PageLayout headerTitle={pageTitle} drawerOptions={routeConfig}>
        <Routes />
      </PageLayout>
    </BrowserRouter>
    
  );
}

const mapStateToProps = state => ({
  pageTitle: state.currentPageTitle
});

export default connect(mapStateToProps)(App);
