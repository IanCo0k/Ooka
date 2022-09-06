import React from 'react';
import { useEffect } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import ReactGA from 'react-ga';
const TRACKING_ID = "G-N5G4KBHM6D";
ReactGA.initialize(TRACKING_ID);

const App = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='container'>
      <HashRouter>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
      </HashRouter>
    </div>
  );
};

export default App;
