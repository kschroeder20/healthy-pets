
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import Title from "../components/Title";
import NavBar from '../components/NavBar';
import PetNav from "../components/PetNav";

// rt default withAuth(
class Home extends Component {
  state = { isSignedIn: true }

  componentDidMount = () => {
    const userSignedIn = window.localStorage.getItem('userSingedIn');
    this.setState({ isSignedIn: userSignedIn })
    console.log(this.state.isSignedIn);
  }

  // handleLogout = (e) => {
  //   const userSignedIn =
  //   this.setState({ isSignedIn: false })
  // }

  render() {
    return (
      <div>
        <NavBar isSignedIn={this.state.isSignedIn} handleLogout={this.handleLogout} />
        <Title />
        <div className="jumbotron text-center">
          <h1 className="display-4">Pet Portal</h1>

        </div>
      </div>
    );
  }
}

export default Home
