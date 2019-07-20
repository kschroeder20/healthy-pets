import React from "react";
import "./style.css";
import MedicalModal from "../Modals/MedicalModal";

function Medical(props) {
  return (
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Medical History</h3>
        <MedicalModal />
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