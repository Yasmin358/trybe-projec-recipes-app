import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalProvider from './context/GlobalProvider';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';

function App() {
  return (
    <Switch>
      <GlobalProvider>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
        <Route path="/profile" component={ Profile } />
        <Route path="/drinks" component={ Drinks } />
      </GlobalProvider>
    </Switch>
  );
}

export default App;
