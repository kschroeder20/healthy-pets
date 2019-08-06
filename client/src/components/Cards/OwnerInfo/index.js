import React, { Component } from "react";
import OwnerModal from "../../Modals/OwnerModal";
import axios from "axios";
import "./style.css";

class OwnerInfo extends Component {
  updatedModal = () => {
    this.props.getUserInfo(this.props.uid);
    this.writeFiles();
  };

  writeFiles = () => {
    axios
      .get(`/api/user/writefile/${this.props.uid}`)
      .then(res => axios.get(`/api/pets/writefile/${this.props.petId}`))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="card">
        <div className="card-body text-center">
          <h3 className="card-title">
            <strong>Owner Profile</strong>
          </h3>
          <OwnerModal modalUpdate={this.updatedModal} />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Name:</strong> {this.props.owner}
          </li>
          <li className="list-group-item">
            <strong>Home Phone:</strong> {this.props.homePhone}
          </li>
          <li className="list-group-item">
            <strong>Cell Phone:</strong> {this.props.mobilePhone}
          </li>
          <li className="list-group-item">
            <strong>Email:</strong> {this.props.email}
          </li>
          <li className="list-group-item">
            <strong>Address:</strong> {this.props.address}
          </li>
          <li className="list-group-item">
            <strong>Primary Vet Name:</strong> {this.props.vetName}
          </li>
          <li className="list-group-item">
            <strong>Primary Vet Phone:</strong> {this.props.vetPhone}
          </li>
        </ul>
      </div>
    );
  }
}

export default OwnerInfo;
