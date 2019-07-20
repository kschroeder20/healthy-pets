
import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { withAuth } from "@okta/okta-react";
// import Title from "../components/Title";
// import NavBar from '../components/NavBar';
// import PetNav from "../components/PetNav";
import Title from "../components/Title"
import NavBar from '../components/NavBar';
import Picture from "../components/Picture";
import Calendar from "../components/Calendar";

// rt default withAuth(
class Home extends Component {
  state = { isSignedIn: true }

  componentDidMount = () => {
    const userSignedIn = window.sessionStorage.getItem('userSingedIn');
    this.setState({ isSignedIn: userSignedIn })
  }
  
 render() {
    return (
      <div>
        <NavBar />
        <Title />
        <div className="jumbotron text-center">
          <h1 className="display-4">Pet Portal</h1>
        </div>
      </div>
    );
  }
}

export default Home
