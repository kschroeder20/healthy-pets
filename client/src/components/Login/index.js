import React, { Component } from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import API from "../../utils/API";

export default class index extends Component {
    state = {

        isSignedIn: false
    }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => {
                window.sessionStorage.setItem('userSignedIn', true);
                //editOwnerWithId();
                window.location.href = '/'
            }
        }
    }

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
            this.setState({ isSignedIn: !!user })
            window.sessionStorage.setItem('user', JSON.stringify(user))
            console.log("user", user);
        })
    }

    render() {
        return (
            <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
            />
        )
    }
}
