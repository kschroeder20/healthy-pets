import React, { Component } from "react";
import PetModal from "../../Modals/PetModal";
import Axios from "axios";
import PhotoUpload from "../../PhotoUpload";


class PetInfo extends Component {

  state = {
    pet: {
      petName: "",
      petBirthday: "",
      petSpecies: "",
      petColor: "",
      petBreed: "",
      petSex: "",
      petWeight: 0,
      petRabiesTag: "",
      petMicroChip: "",
    },
    currentPetId: 0,
    currentUserId: 0,
    modalOpen: false
    
  }
  componentDidMount = () => {
    let petObj = {
      petName: this.props.PetName,
      petBirthday: this.props.petBirthday,
      petSpecies: this.props.petSpecies,
      petColor: this.props.petColor,
      petBreed: this.props.petBreed,
      petSex: this.props.petSex,
      petWeight: this.props.petWeight,
      petRabiesTag: this.props.petRabiesTag,
      petMicroChip: this.props.petMicroChip,
    }
    this.setState({pet: petObj, currentUserId: this.props.uid, currentPetId: this.props.currentPetId})
    
  };

  updatedModal = (currentPetId) => {
    this.props.getPetInfo(currentPetId);
  };

  modalOpen = (open) => {
    this.setState({modalOpen: open})
    this.props.modalOpen(open);
  }
  render() {
    return (
      <div className="card" id="pet-card">
        
        <div className="card-body text-center">
          <h3 className="card-title">
            <strong>Pet Profile</strong>
          </h3>
          <PetModal 
          modalUpdate={this.updatedModal} 
          petName={this.props.petName} 
          petBirthday={this.props.petBirthday}
          petSpecies={this.props.petSpecies}
          petColor={this.props.petColor}
          petBreed={this.props.petBreed}
          petSex={this.props.petSex}
          petWeight={this.props.petWeight}
          petRabiesTag={this.props.petRabiesTag}
          petMicroChip={this.props.petMicroChip}
          currentPetId = {this.props.currentPetId}
          uid={this.props.currentUserId}
          getUserInfo={this.getUserInfo}
          modalOpen={this.modalOpen}
          />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Name: </strong> {this.props.petName}
          </li>
          <li className="list-group-item">
            <strong>Birthday: </strong> {this.props.petBirthday}
          </li>
          <li className="list-group-item">
            <strong>Species: </strong> {this.props.petSpecies}
          </li>
          <li className="list-group-item">
            <strong>Color: </strong> {this.props.petColor}
          </li>
          <li className="list-group-item">
            <strong>Breed: </strong> {this.props.petBreed}
          </li>
          <li className="list-group-item">
            <strong>Pet Sex: </strong> {this.props.petSex}
          </li>
          <li className="list-group-item">
            <strong>Weight: </strong> {this.props.petWeight}
          </li>
          <li className="list-group-item">
            <strong>Rabies Tag#: </strong> {this.props.petRabiesTag}
          </li>
          <li className="list-group-item">
            <strong>Microchip#: </strong> {this.props.petMicroChip}
          </li>
        </ul>
        <PhotoUpload
        uid={this.state.currentUserId}
        petId = {this.state.currentPetId}
        />
        <img src={this.props.petUrl} alt="yourPet"/>
      </div>
    );
  }
}

export default PetInfo;
