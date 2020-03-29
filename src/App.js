import React from 'react';
import './App.css';
import Nav from './pages/nav';
import About from './pages/about';
import Shop from './pages/shop';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Item from './pages/itemDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/pages/shop" exact component={Shop}></Route>
          <Route path="/pages/shop:id"  component={Item}></Route>
          <Route path="/pages/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
