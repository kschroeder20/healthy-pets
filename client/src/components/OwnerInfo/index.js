import React from "react";

function OwnerInfo(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Owner Profile</h5>
        <button className="edit-button">Edit</button>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name:{props.ownerName}</li>
        <li className="list-group-item">Home Phone:{props.homePhone}</li>
        <li className="list-group-item">Cell Phone:{props.cellPhone}</li>
        <li className="list-group-item">Email:{props.email}</li>
        <li className="list-group-item">Address:{props.address}</li>
        <li className="list-group-item">Primary Vet Name:{props.vetName}</li>
        <li className="list-group-item">Primary Vet Phone:{props.vetPhone}</li>
      </ul>
    </div>
  );
}

export default OwnerInfo;
