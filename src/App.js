import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalProvider from './context/GlobalProvider';
import './App.css';
import './styles/Header.css';
import './styles/Main.css';
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
        <Route
          exact
          path="/foods"
          render={ (props) => (
            <>
              <Foods { ...props } />
              <Footer { ...props } />
            </>) }
        />
        <Route path="/foods/:id" component={ Recipes } />
        <Route path="/foods/:id/in-progress" component={ Recipes } />
        <Route
          path="/profile"
          render={ (props) => (
            <>
              <Profile { ...props } />
              <Footer { ...props } />
            </>) }
        />

        <Route
          exact
          path="/drinks"
          render={ (props) => (
            <>
              <Drinks { ...props } />
              <Footer { ...props } />
            </>) }
        />
        <Route path="/drinks/:id" component={ DrinksRecipes } />
        <Route path="/drinks/:id/in-progress" component={ DrinksRecipes } />

        <Route path="/done-recipes" component={ DoneRecipes } />

        <Route path="/favorite-recipes" component={ FavoriteRecipes } />

      </GlobalProvider>
    </Switch>
  );
}

export default App;
