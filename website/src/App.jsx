import React from 'react';
import { useEffect } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import Top5QBweek1 from './pages/Top5QBweek1';
import Top5PG from './pages/Top5PG';
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
        <Route path='/blog/2' component={Top5PG} />
        <Route path='/blog/1' component={Top5QBweek1} />
      </HashRouter>
    </div>
  );
};

export default App;
