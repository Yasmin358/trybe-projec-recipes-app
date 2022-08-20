import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalProvider from './context/GlobalProvider';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import Recipes from './pages/Recipes';
import DrinksRecipes from './pages/DrinksRecipes';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Footer from './components/Footer';

function App() {
  return (
    <Switch>
      <GlobalProvider>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route path="/foods/:id" component={ Recipes } />
        <Route path="/profile" component={ Profile } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route path="/drinks/:id" component={ DrinksRecipes } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="/" component={ Footer } />
      </GlobalProvider>
    </Switch>
  );
}

export default App;
