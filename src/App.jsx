import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import BeerList from './views/BeerList';
import SingleBeer from './views/SingleBeer';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/" component={BeerList} exact />
      <Route path="/pokemon/:id" component={SingleBeer} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
