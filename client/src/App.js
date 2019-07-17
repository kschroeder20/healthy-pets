import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './components/Login';

function onAuthRequired({ history }) {
  history.push('/login')
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-217893.okta.com/oauth2/default"
          client_id="0oax790rjgenQw6O3356"
          redirect_uri={window.location.origin + '/implicit/callback'}
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
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;