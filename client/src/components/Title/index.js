import React from "react";

const Title = function() {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-4">Welcome to HealthyPet!</h1>
        <h3>
          Your one stop location for all your pet's information.
        </h3>
        <p className="lead">
          This app is designed to give you a convenient place to store all of
          the details of your pets' lives from their food preference to
          veterinary appointments. Login now to get started and create your pet
          profiles.
        </p>
      </div>
    </div>
  );
};

export default Title;