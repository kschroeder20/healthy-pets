import React, { Component } from "react";
import "./style.css";
import MedicalModal from "../../Modals/MedicalModal";
import axios from "axios";

class Medical extends Component {
  state = {
    pet: {},
    currentPetId: 0,
    currentUserId: 0,
    modalOpen: false
  };

  componentDidMount = () => {
    let petObj = {
      medications: this.props.medications,
      vaccines: this.props.vaccines,
      allergies: this.props.allergies,
      food: this.props.food,
      procedures: this.props.procedures,
      petId: this.props.petId,
      uid: this.props.uid
    };
    this.setState({
      pet: petObj,
      currentUserId: this.props.uid,
      currentPetId: this.props.petId
    });
  };

  updatedModal = currentPetId => {
    this.props.getPetInfo(currentPetId);
    this.writeFiles();
  };

  modalOpen = open => {
    this.setState({ modalOpen: open });
    this.props.modalOpen(open);
  };

  writeFiles = () => {
    axios
      .get(`/api/user/writefile/${this.props.uid}`)
      .then(res => axios.get(`/api/pets/writefile/${this.props.currentPetId}`))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="card">
        <div className="card-body text-center">
          <h3 className="card-title">
            <strong>Medical History</strong>
          </h3>
          <MedicalModal
            petMedications={this.props.petMedications}
            petInoculations={this.props.petInoculations}
            petAllergies={this.props.petAllergies}
            petFood={this.props.petFood}
            petProcedures={this.props.petProcedures}
            currentUserId={this.props.uid}
            petId={this.props.petId}
            modalUpdate={this.updatedModal}
            modalOpen={this.modalOpen}
          />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" data-testid="Medications">
            <strong>Medications: </strong>
            {this.props.petMedications}
          </li>
          <li className="list-group-item" data-testid="Vaccines">
            <strong>Vaccines: </strong>
            {this.props.petInoculations}
          </li>
          <li className="list-group-item" data-testid="Allergies">
            <strong>Allergies: </strong>
            {this.props.petAllergies}
          </li>
          <li className="list-group-item" data-testid="Food">
            <strong>Food: </strong>
            {this.props.petFood}
          </li>
          <li className="list-group-item" data-testid="Procedures">
            <strong>Procedures: </strong>
            {this.props.petProcedures}
          </li>
        </ul>
      </div>
    );
  }
}

export default Medical;
