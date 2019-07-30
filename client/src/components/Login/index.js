import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import API from "../../utils/API.js";
import NavBar from "../NavBar";
import "./style.css";

export default class index extends Component {
  state = {
    isSignedIn: false
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => {
        window.sessionStorage.setItem("userSignedIn", true);
        const user = firebase.auth().currentUser;
        let newUser = {};
        if (user != null) {
          newUser = {
            name: user.displayName,
            email: user.email,
            uid: user.uid 
          };
        }
        this.determineRepeatUser(newUser);
      }
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };

  determineRepeatUser = newUser => {
    API.getPetById(newUser.uid)
      .then(res => {
        res.data.length === 0
          ? this.createNewUser(newUser)
          : window.location.replace(`/profile/${newUser.uid}`);
      })
      .catch(err => console.log(err));
  };

  createNewUser = user => {
    console.log(user)
    API.saveData({
      ownerName: user.name,
      email: user.email,
      uid: user.uid
    })
      .then(res => {
        window.location.replace(`/profile/${user.uid}`);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavBar />
      <div className="container">
        <div className="col-4" id="login-container">
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
        <img
          src="http://www.capecodpetresort.com/wp-content/uploads/banner-pets-dog-cat-boarding-1000x451.png"
          alt="pets"
        />
      </div>
      </div>
    );
  }
}
