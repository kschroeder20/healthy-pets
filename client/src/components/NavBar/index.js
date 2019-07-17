import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import Navigation from "../shared/Navigation";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Healthy Pet Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="/">Home</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to="/profile">Login</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to="/register">Register</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
