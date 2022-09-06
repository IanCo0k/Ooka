import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
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
