import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  //Checks everytime an update happens if authenticated.
  componentDidUpdate() {
    this.checkAuthentication();
  }

  //Either returns the login form or directs to the user's page depending on if it is authenticated or not.
  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?

      <Redirect to={{ pathname: '/ProfilePage.js' }} /> :
      <LoginForm baseUrl={this.props.baseUrl} />;

  }
});