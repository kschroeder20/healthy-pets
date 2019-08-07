import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { IconContext } from "react-icons";
import firebase from "firebase";
import "./style.css";

class Navbar extends Component {
  handleLogout = e => {
    firebase.auth().signOut();
    window.sessionStorage.setItem("userSignedIn", false);
    window.sessionStorage.setItem("user", null);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand" to="/">
            Healthy Pets
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <IconContext.Provider
            value={{ color: "white", className: "global-class-name" }}
          >
            <FaPaw />
            <FaPaw />
            <FaPaw />
          </IconContext.Provider>
          <div className="collapse navbar-collapse" id="navbarNav">
            {window.sessionStorage.getItem("userSignedIn") === "true" ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={e => this.handleLogout(e)}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            )}
            ​
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
