import React, { Component } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
import DownloadPDF from "../DownloadPDF";
import NewPetModal from "../Modals/NewPetModal"
import Modal from 'react-modal';
import "./style.css";
import axios from 'axios';


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

class PetNav extends Component {
  state = {
    userId: 0,
    currentPetId: 0,
    petName: [],
    pets: []
  }

  componentWillMount = () =>{
    const url = window.location.pathname;
    const pathnameArr = url.split("/");
    const userId = pathnameArr[pathnameArr.length - 1];
    this.setState({userId: userId}, () => this.getPetInfo(userId));
  };

  getPetInfo = (userId) => {
    axios.get(`/api/pets/${userId}`)
    .then(res => {
      let pet = []
      let petName = []
      for(let i = 0; i < res.data.length; i++){
        pet.push(res.data[i])
        petName.push(res.data[i].petName)
        this.setState({pets: pet})
        this.setState({petName: petName})
      }
    })
    .catch(err => console.log(err));
  }

  handlePetChange = (pet) => {
    for(let i = 0; i < this.state.pets.length; i ++){
      if(pet === this.state.pets[i].petName){
        this.setState({currentPetId: this.state.pets[i]._id}, () => this.props.handlePetChange(this.state.currentPetId))
      }
    }
  }

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
    const petDropdown = this.state.petName

    const navItems = petDropdown.map((pet) => 
    <Dropdown.Item onClick={() => this.handlePetChange(pet)}>{pet}</Dropdown.Item>
    );
    return (
      <nav className="navbar" id="pet-nav">
        <div className="container">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Select Pet
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {navItems}
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="secondary">
            Add A Pet <NewPetModal getPetInfo={this.getPetInfo}/>
          </Button>

          <DownloadPDF />
        </div>
      </nav>
    );
  }
}

export default PetNav;
