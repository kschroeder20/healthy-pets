import React from "react";
import PetModal from "../Modals/PetModal";

function PetInfo(props) {
  return (
    <div className="card" id="pet-card">
      <div className="card-body">
        <h3 className="card-title">Pet Profile</h3>
        <PetModal/>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name:{props.petName}</li>
        <li className="list-group-item">Birthday:{props.birthday}</li>
        <li className="list-group-item">Species:{props.species}</li>
        <li className="list-group-item">Color:{props.color}</li>
        <li className="list-group-item">Breed:{props.breed}</li>
        <li className="list-group-item">Pet Sex:{props.sex}</li>
        <li className="list-group-item">Weight:{props.weight}</li>
        <li className="list-group-item">Rabies Tag#:{props.tag}</li>
        <li className="list-group-item">Microchip#:{props.microchip}</li>
      </ul>
    </div>
  );
}

export default PetInfo;