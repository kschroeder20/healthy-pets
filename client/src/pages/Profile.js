import React, { Component } from "react";
import OwnerInfo from "../components/Cards/OwnerInfo";
import PetInfo from "../components/Cards/PetInfo";
import Medical from "../components/Cards/MedicalHistory";
import NavBar from "../components/NavBar";
import PetNav from "../components/PetNav";
import { Container, Row, Col } from "react-grid-system";
import CalendarComponent from "../components/Calendar";
// import PhotoUpload from "../components/PhotoUpload";
import axios from 'axios';
// import { writeFile } from "fs";


// const cp = require("child_process");

class Profile extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: "",
    currentUserId: 0,
    isSignedIn: "",
    currentPetIndex: 0,
    currentPetId: 0,
    user: {},
    pet: [{
      uid: 0,
      petId: 0,
      petName: "",
      petBirthday: "",
      petColor: "",
      petBreed: "",
      petSpecies: "",
      petSex: "",
      petWeight: 0,
      petRabiesTag: 0,
      petMicrochip: 0,
      petMedications: "",
      petInoculations: "",
      petAllergies: "",
      petFood: "",
      petProcedures: "",
      petUrl: ""
    }],
    modalOpen: false
  };

  componentWillMount = () => {
    const url = window.location.pathname;
    const pathnameArr = url.split("/");
    const userId = pathnameArr[pathnameArr.length - 1];
    this.setState({ 
      currentUserId: userId,
     });

    axios.get(`/api/users/${userId}`)
      .then(res => {this.setState({ user: res.data[0] })})
      .catch(err => console.log(err));

    axios.get(`/api/pets/${userId}`)
      .then(res => {
        this.setState({ 
          pet: res.data, 
          currentPetId: res.data[0]._id,
          // petUrl: res.data[0].petUrl
      })
      this.writeFiles()
      // console.log("Url here: " + res.data[0].petUrl)
    })
      .catch(err => console.log(err));
  };

  writeFiles = () => {
    axios.get(`/api/user/writefile/${this.state.currentUserId}`)
      .then(res => axios.get(`/api/pets/writefile/${this.state.currentPetId}`))
      .catch(err => console.log(err))
  }
  getUserInfo = userId => {
    axios.get(`/api/users/${userId}`)
      .then(res => {
        this.setState({ user: res.data[0] });
        this.getPetInfo(this.state.currentUserId)
        this.writeFile();
            })
      .catch(err => console.log(err));
  };

  getPetInfo = petId => {
    axios.get(`/api/pets/${this.state.currentUserId}`)
      .then(res => {
        this.setState({ 
          pet: res.data, 
          currentPetId: res.data[0]._id,
          petUrl: res.data[0].petUrl
      })
      console.log("Url here: " + res.data[0].petUrl)
    })
      .then( res => {
        for(let i =0; i < this.state.pet.length; i++){
          if(petId === this.state.pet[i]._id){
            this.setState({currentPetId: this.state.pet[i]._id, currentPetIndex: i})
            
          }
      }
    })
      .catch(err => console.log(err));
  }

  modalOpen = (open) => {
    this.setState({modalOpen: open})

  }

  handleLogout = e => {
    this.setState({ isSignedIn: false });
  };

  handlePetChange = (petId) =>{
    this.setState({currentPetId: petId}, () => {
      this.getPetInfo(petId)
      this.writeFiles()
    })
    
  }

  render() {
    if(!this.state.currentPetId){return null}
    return (
      <div>
        <NavBar />
        <PetNav 
        handlePetChange={this.handlePetChange}
        />
        <div>
          <Container>
            <Row>
              <Col sm={4}>
                <OwnerInfo
                  owner={this.state.user.ownerName}
                  homePhone={this.state.user.homePhone}
                  mobilePhone={this.state.user.mobilePhone}
                  email={this.state.user.email}
                  address={this.state.user.address}
                  vetName={this.state.user.vetName}
                  vetPhone={this.state.user.vetPhone}
                  uid={this.state.currentUserId}
                  getUserInfo={this.getUserInfo}
                  petId = {this.state.currentPetId}
                />
                <Medical
                  petMedications={this.state.pet[this.state.currentPetIndex].petMedications}
                  petInoculations={this.state.pet[this.state.currentPetIndex].petInoculations}
                  petAllergies={this.state.pet[this.state.currentPetIndex].petAllergies}
                  petFood={this.state.pet[this.state.currentPetIndex].petFood}
                  petProcedures={this.state.pet[this.state.currentPetIndex].petProcedures}
                  petId = {this.state.currentPetId}
                  uid={this.state.currentUserId}
                  getUserInfo={this.getUserInfo}
                  getPetInfo={this.getPetInfo}
                  modalOpen={this.modalOpen}
                />
              </Col>
              <Col sm={4}>
                <CalendarComponent />
                <img src="https://www.mercypetclinic.org/wp-content/uploads/2018/12/MPC_sliderupdates_mainslider.png" alt="pets" id="pets"/>
              </Col>
              <Col sm={4}>
                <PetInfo
                  petName={this.state.pet[this.state.currentPetIndex].petName}
                  petBirthday={this.state.pet[this.state.currentPetIndex].petBirthday}
                  petSpecies={this.state.pet[this.state.currentPetIndex].petSpecies}
                  petColor={this.state.pet[this.state.currentPetIndex].petColor}
                  petBreed={this.state.pet[this.state.currentPetIndex].petBreed}
                  petSex={this.state.pet[this.state.currentPetIndex].petSex}
                  petWeight={this.state.pet[this.state.currentPetIndex].petWeight}
                  petRabiesTag={this.state.pet[this.state.currentPetIndex].petRabiesTag}
                  petMicroChip={this.state.pet[this.state.currentPetIndex].petMicroChip}
                  petUrl={this.state.pet[this.state.currentPetIndex].petUrl}
                  currentPetId = {this.state.currentPetId}
                  uid={this.state.currentUserId}
                  getPetInfo={this.getPetInfo}
                  modalOpen={this.modalOpen}
                />
                
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Profile;
