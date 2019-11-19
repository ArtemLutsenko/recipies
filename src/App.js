import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar />

      <Switch>
        <Route exact path = '/' component = {Home}></Route>
        <Route exact path = '/recipes' component = {Recipes}></Route>
        <Route path = '/recipes/:id' component = {SingleRecipe}></Route>
        <Route component = {Default}></Route>
      </Switch>
    </div>
  );
}

export default App;
