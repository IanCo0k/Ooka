import React from 'react';
import { useEffect } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import Top5QBweek1 from './pages/Top5QBweek1';
import Top5PG from './pages/Top5PG';
import MediaDay from './pages/MediaDay';
import NFLPredictions from './pages/NFLPredictions';
import NFLW1 from './pages/NFLW1';
import NFLW2 from './pages/NFLW2';
import Top5Backcourts from './pages/Top5Backcourts';
import CFBW2 from './pages/CFBW2';
import CFBW3 from './pages/CFBW3';
import CFBW4 from './pages/CFBW4';
import Texas from './pages/Texas';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
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
        <Route path='/blog/1' component={Top5PG} />
        <Route path='/blog/2' component={Top5QBweek1} />
        <Route path='/blog/3' component={NFLPredictions} />
        <Route path='/blog/4' component={NFLW1} />
        <Route path='/blog/5' component={CFBW2} />
        <Route path='/blog/6' component={Top5Backcourts} />
        <Route path='/blog/7' component={CFBW3} />
        <Route path='/blog/8' component={Texas} />
        <Route path='/blog/9' component={NFLW2} />
        <Route path='/blog/10' component={CFBW4} />
        <Route path='/blog/11' component={MediaDay} />
        <Route path='/about/' component={AboutUs} />
      </HashRouter>
    </div>
  );
};

export default App;
