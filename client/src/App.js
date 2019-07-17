import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import config from './app.config';

function onAuthRequired({ history }) {
  history.push('/login')
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
      issuer={config.issuer}
      client_id={config.client_id}
      redirect_uri={config.redirect_uri}
      onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/profile" exact={true} component={Profile} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-217893.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Route path="/signup" component={SignUpForm} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;