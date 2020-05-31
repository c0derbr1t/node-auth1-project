import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

// import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import UsersList from './components/UsersList';
import User from './components/User';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={UsersList} />
        <Route exact path="/users/:id" component={User} />
      </div>
    </Router>
  );
}

export default App;
