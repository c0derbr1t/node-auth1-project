import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import UsersList from './components/UsersList';
import User from './components/User';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/users/:id' component={User} />
        <Route path='/users' component={UsersList} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
      </Switch>
    </div>
  );
}

export default App;
