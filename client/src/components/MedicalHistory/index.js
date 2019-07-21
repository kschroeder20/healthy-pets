import React from "react";
import "./style.css";
import MedicalModal from "../Modals/MedicalModal";

function Medical(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Medical History</h3>
        <MedicalModal />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Medications:{props.medication}</li>
        <li className="list-group-item">Vaccines:{props.vaccines}</li>
        <li className="list-group-item">Allergies:{props.allergies}</li>
        <li className="list-group-item">Food:{props.food}</li>
        <li className="list-group-item">Procedures:{props.procedures}</li>
      </ul>
    </div>
  );
}

export default Medical;