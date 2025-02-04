import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './views/Home';
import BeerList from './views/BeerList';
import SingleBeer from './views/SingleBeer';
import NewBeer from './views/NewBeer';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/beer" component={BeerList} exact />
        <Route path="/beer/:id" component={SingleBeer} exact />
        <Route path="/beer/new" component={NewBeer} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
