import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import DownloadPDF from "../DownloadPDF";
import NewPetModal from "../Modals/NewPetModal";
import Modal from "react-modal";
import "./style.css";
import axios from "axios";

Modal.setAppElement(document.getElementById("root"));

class PetNav extends Component {
  state = {
    userId: 0,
    currentPetId: 0,
    petName: [],
    pets: []
  };

  componentWillMount = () => {
    const url = window.location.pathname;
    const pathnameArr = url.split("/");
    const userId = pathnameArr[pathnameArr.length - 1];
    this.setState({ userId: userId }, () => this.getPetInfo(userId));
  };

  getPetInfo = userId => {
    axios
      .get(`/api/pets/${userId}`)
      .then(res => {
        let pet = [];
        let petName = [];
        for (let i = 0; i < res.data.length; i++) {
          pet.push(res.data[i]);
          petName.push(res.data[i].petName);
          this.setState({ pets: pet });
          this.setState({ petName: petName });
        }
      })
      .catch(err => console.log(err));
  };

  handlePetChange = pet => {
    for (let i = 0; i < this.state.pets.length; i++) {
      if (pet === this.state.pets[i].petName) {
        this.setState({ currentPetId: this.state.pets[i]._id }, () =>
          this.props.handlePetChange(this.state.currentPetId)
        );
      }
    }
  };

  render() {
    const petDropdown = this.state.petName;

    const navItems = petDropdown.map(pet => (
      <Dropdown.Item onClick={() => this.handlePetChange(pet)}>
        {pet}
      </Dropdown.Item>
    ));
    return (
      <nav className="navbar navbar-expand-sm" id="pet-nav">
        <div className="container">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Select Pet
            </Dropdown.Toggle>
            <Dropdown.Menu>{navItems}</Dropdown.Menu>
          </Dropdown>

          <NewPetModal getPetInfo={this.getPetInfo} />

          <DownloadPDF />
        </div>
      </nav>
    );
  }
}

export default PetNav;
