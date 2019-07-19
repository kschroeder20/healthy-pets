import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import { IconContext } from "react-icons";
import firebase from "firebase";

class Navbar extends Component {
    componentDidMount = () => {
        console.log(this.props.isSignedIn)
        const userSignedIn = window.localStorage.getItem('userSingedIn');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Healthy Pets
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <FaPaw />
                        <FaPaw />
                        <FaPaw />
                    </IconContext.Provider>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {window.localStorage.getItem('userSingedIn') === "true" ? (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">
                                        Profile
                                </Link>
                                </li>

                                <li className="nav-item" >
                                    <Link className="nav-link" to="/" onClick={() => firebase.auth().signOut()} onClick={this.props.handleLogout}>
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
                                        <Link className="nav-link" to="/login" >
                                            Login
                                    </Link>
                                    </li>
                                </ul>

                            )}

                    </ div>
                </div>
            </nav >
        );
    }
}

export default Navbar;