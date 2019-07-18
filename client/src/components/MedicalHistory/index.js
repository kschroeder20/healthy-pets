import React from "react";
import "./style.css";

function Medical(props) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Medical History</h5>
        <button className="edit-button">Edit</button>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Medications:{props.medication}</li>
        <li class="list-group-item">Vaccines:{props.vaccines}</li>
        <li class="list-group-item">Allergies:{props.allergies}</li>
        <li class="list-group-item">Food:{props.food}</li>
        <li class="list-group-item">Procedures:{props.procedures}</li>
      </ul>
    </div>
  );
}

export default Medical;