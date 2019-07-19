import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import Title from "../components/Title";
import PetNav from "../components/PetNav";

// rt default withAuth(
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

export default Home
  // class Home extends Component {
  //   state = { authenticated: null };

  //   checkAuthentication = async () => {
  //     const authenticated = await this.props.auth.isAuthenticated();
  //     if (authenticated !== this.state.authenticated) {
  //       this.setState({ authenticated });
  //     }
  //   };

  //   async componentDidMount() {
  //     this.checkAuthentication();
  //   }

  //   async componentDidUpdate() {
  //     this.checkAuthentication();
  //   }

  //   login = async () => {
  //     this.props.auth.login("/");
  //   };

  //   logout = async () => {
  //     this.props.auth.logout("/");
  //   };

  //   render() {
  //     if (this.state.authenticated === null) return null;

  //     //if we are authenticated
  //     const mainContent = this.state.authenticated ? (
  //       <div>
  //         <p className="lead">
  //           You have been logged in! <Link to="/profile">click here</Link>
  //         </p>
  //         <button className="btn btn-light btn-lg" onClick={this.logout}>
  //           Logout
  //         </button>
  //       </div>
  //     ) : (
  //       <div>
  //         <p className="lead">
  //           Right now, we have to have someone on the back end manually add
  //           users
  //         </p>
  //         <button className="btn btn-dark btn-lg" onClick={this.login}>
  //           Login
  //         </button>
  //       </div>
  //     );

  //     return (
  //       <div>
  //         <Title />
  //         <div className="jumbotron text-center">
  //           <h1 className="display-4">Pet Portal</h1>
  //           {mainContent}
  //         </div>
  //       </div>
  //     );
  //   }
  // }

