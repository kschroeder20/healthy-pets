import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import API from "../../utils/API.js";
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
            uid: user.uid // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
          };
        }
        this.determineRepeatUser(newUser);

        //console.log(newUser);
      }
    }
  };

  // editOwnerWithId = () => {
  //     const user = JSON.parse(window.sessionStorage.getItem('user'));
  //     const userId = user.uid;
  //     API.updatePet(userId)
  //         .then(res => {
  //             console.log(res.data);
  //         })
  //         .catch(err => console.log(err));
  // }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      // window.sessionStorage.setItem('userName', JSON.stringify(user.displayName));
      // window.sessionStorage.setItem('userEmail', JSON.stringify(user.email));
      // window.sessionStorage.setItem('userId', JSON.stringify(user.uid))
    });
  };

  determineRepeatUser = newUser => {
    API.getPetById(newUser.uid)
      .then(res => {
        //console.log(res);
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
    );
  }
}
