import React from "react";

function PetInfo(props) {
  return (
    <div class="card" id="pet-card">
      <div class="card-body">
        <h5 class="card-title">Pet Profile</h5>
        <button className="edit-button">Edit</button>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name:{props.petName}</li>
        <li class="list-group-item">Birthday:{props.birthday}</li>
        <li class="list-group-item">Species:{props.species}</li>
        <li class="list-group-item">Color:{props.color}</li>
        <li class="list-group-item">Breed:{props.breed}</li>
        <li class="list-group-item">Pet Sex:{props.sex}</li>
        <li class="list-group-item">Weight:{props.weight}</li>
        <li class="list-group-item">Rabies Tag#:{props.tag}</li>
        <li class="list-group-item">Microchip#:{props.microchip}</li>
      </ul>
    </div>
  );
}

export default PetInfo;