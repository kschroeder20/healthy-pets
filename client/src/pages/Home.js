import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import Title from "../components/Title";

export default withAuth(
    class Home extends Component {
        render() {

            //if we are authenticated
            // const mainContent = this.state.authenticated ? (
            // <div>
            //     <p className="lead">
            //         You have been logged in!{' '}
            //         <Link to="/profile">click here</Link>
            //     </p>
            //     <button className="btn btn-light btn-lg" onClick={this.logout}>
            //         Logout
            // </button>
            // </div>
            // ) : (
            //         <div>
            //             <p className="lead">
            //                 Right now, we have to have someone on the back end manually add users
            //             </p>
            //             <button className="btn btn-dark btn-lg" onClick={this.login}>
            //                 Login
            //             </button>
            //         </div>
            //     );

            return (
                <div>
                    <Title />
                    <div className="jumbotron text-center">
                        <h1 className="display-4">Pet Portal</h1>

                    </div>
                </div>
            );
        }
    }
);