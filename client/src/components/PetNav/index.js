import React, { Component } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
import DownloadPDF from "../DownloadPDF";
import Modal from 'react-modal';
import "./style.css";


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

class PetNav extends Component {
  //send the pet details as props from the profile page.
  // constructor() {
  //   super();
  //   this.handleSelect = this.handleSelect.bind(this);
  //   this.addPet = this.addPet.bind(this);
  //   this.openModal = this.openModal.bind(this);
   
  //   this.state = {
  //     chosenPet
  //   };
  // }

  //Thoughts: handleSelect should update the db to display the pet data for the selected pet.
  // handleSelect(event) {
  //   this.updateDb(this.state.chosenPet);
  // }

  //The add pet should trigger the petmodal and the medical modal so the user can create a new pet. 
  //Do we need to re-do all functionality or is there a way to call the already created modals?
  //Info filled in should be sent to our new pet collection. 
  // addPet = e => {
  //   this.openModal();
  // };

  //Add onclick={this.handleSelect} for 1st dropdown.
  //Add onclick={this.addPet} for dropdown.menu.
  render() {
    return (
      <nav className="navbar" id="pet-nav">
        <div className="container">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Select Pet
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Pet 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Pet 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Pet 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="secondary">
            Add A Pet <FaPlusSquare />
          </Button>

          <DownloadPDF />
        </div>
      </nav>
    );
  }
}

export default PetNav;
