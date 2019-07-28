import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <span>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/logout" component={LogOut} />
              <Route path="/login" component={Login} />
              <Route component={Home} />
            </Switch>
          </span>
        </div>
      </Router>
    );
  }
}

export default App;

// render() {
//   return (
//     <Router>
//         <div className="App">
//           <Navbar />
//           <div className="container">
//             <Route path="/" exact={true} component={Home} />
//             <SecureRoute path="/profile" exact={true} component={Profile} />
//             <Route
//               path="/login"
//               render={() => (
//                 <Login baseUrl="https://dev-217893.okta.com" />
//               )}
//             />
//             <Route path="/implicit/callback" component={ImplicitCallback} />
//           </div>
//         </div>
//     </Router>
//   );
// }
// }

// export default App;
