import React from "react";

function OwnerInfo(props) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Owner Profile</h5>
        <button className="edit-button">Edit</button>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name:{props.ownerName}</li>
        <li class="list-group-item">Home Phone:{props.homePhone}</li>
        <li class="list-group-item">Cell Phone:{props.cellPhone}</li>
        <li class="list-group-item">Email:{props.email}</li>
        <li class="list-group-item">Address:{props.address}</li>
        <li class="list-group-item">Primary Vet Name:{props.vetName}</li>
        <li class="list-group-item">Primary Vet Phone:{props.vetPhone}</li>
      </ul>
    </div>
  );
}

export default OwnerInfo;
