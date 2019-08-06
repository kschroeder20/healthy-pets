import React, { Component } from "react";
import Title from "../components/Title";
import NavBar from "../components/NavBar";
import PetCarousel from "../components/Carousel";
import "./style.css";

class Home extends Component {
  state = { isSignedIn: true };

  componentDidMount = () => {
    const userSignedIn = window.sessionStorage.getItem("userSingedIn");
    this.setState({ isSignedIn: userSignedIn });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Title />
          <PetCarousel />
        </div>
      </div>
    );
  }
}

export default Home;
