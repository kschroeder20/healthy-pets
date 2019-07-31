import React, {Component} from "react";
import { Dropdown, Button } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
import DownloadPDF from "../DownloadPDF";
import "./style.css";
import axios from 'axios';

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
    this.setState({userId: userId});
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
  };

  handlePetChange = (pet) => {
    for(let i = 0; i < this.state.pets.length; i ++){
      if(pet === this.state.pets[i].petName){
        this.setState({currentPetId: this.state.pets[i]._id}, () => this.props.handlePetChange(this.state.currentPetId))
      }
    }

    // this.props.handlePetChange(pet)
  }

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
          Add A Pet <FaPlusSquare />
        </Button>

        <DownloadPDF/>
      </div>
    </nav>
    )
  }
}

export default PetNav;
