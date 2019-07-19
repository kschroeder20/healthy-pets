import React, { Component } from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export default class index extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }

    render() {
        // return (
        //     <Router>
        //         <div className="App">
        //             {this.state.isSignedIn ? (
        //                 <span>
        //                     <Navbar />
        //                     <Switch>
        //                         <Route exact path="/" component={Home} />
        //                         <Route path="/profile" component={Profile} />
        //                         <Route path="/login" component={Login} />
        //                         <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
        //                         <Route component={Home} />
        //                     </Switch>
        //                 </span>
        //             ) : (
        return (
            <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
            />
            // )}

        )
    }
}
