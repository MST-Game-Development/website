import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageLayout from './components/pageLayout/PageLayout';
import Routes, { routeConfig } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <PageLayout drawerOptions={routeConfig}>
        <Routes />
      </PageLayout>
    </BrowserRouter>
    
  );
}

export default App;
