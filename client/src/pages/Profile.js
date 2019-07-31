import React, { Component } from "react";
import OwnerInfo from "../components/Cards/OwnerInfo";
import PetInfo from "../components/Cards/PetInfo";
import Medical from "../components/Cards/MedicalHistory";
import NavBar from "../components/NavBar";
import PetNav from "../components/PetNav";
// import DownloadPDF from "../components/DownloadPDF";
import { Container, Row, Col } from "react-grid-system";
//import API from "../utils/API";
import CalendarComponent from "../components/Calendar";
import PhotoUpload from "../components/PhotoUpload";
import { userInfo } from "os";
import axios from 'axios';

//const axios = require("axios")

const cp = require("child_process");

class Profile extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: "",
    currentUserId: 0,
    isSignedIn: "",
    currentPetIndex: 0,
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
      petUrl: "https://dummyimage.com/200x200/696669/ffffff&text=Add+a+Photo"
    }]
  };

  componentWillMount = () => {
    const url = window.location.pathname;
    const pathnameArr = url.split("/");
    const userId = pathnameArr[pathnameArr.length - 1];
    this.setState({ currentUserId: userId });

    axios.get(`/api/users/${userId}`)
      .then(res => {this.setState({ user: res.data[0] })})
      .catch(err => console.log(err));

    axios.get(`/api/pets/${userId}`)
      .then(res => {this.setState({ pet: res.data })})
      .catch(err => console.log(err));
  };


  getUserInfo = userId => {
    axios.get(`/api/users/${userId}`)
      .then(res => {
        this.setState({ user: res.data[0] });
        this.getPetInfo(this.state.currentUserId)
            })
      .catch(err => console.log(err));
  };

  // getPetInfo = userId => {
  //   axios.get(`/api/pets/${userId}`)
  //     .then(res => {
  //       this.setState({ pet: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };

  handleLogout = e => {
    this.setState({ isSignedIn: false });
  };

  render() {
    // const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <NavBar />
        <PetNav />
        <div>
          <Container>
            {/* <DownloadPDF /> */}
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
                />
                <Medical
                  medications={this.state.pet[this.state.currentPetIndex].petMedications}
                  vaccines={this.state.pet[this.state.currentPetIndex].petInoculations}
                  allergies={this.state.pet[this.state.currentPetIndex].petAllergies}
                  food={this.state.pet[this.state.currentPetIndex].petFood}
                  procedures={this.state.pet[this.state.currentPetIndex].petProcedures}
                  petId = {this.state.pet[this.state.currentPetIndex].petId}
                  uid={this.state.currentUserId}
                  getUserInfo={this.getUserInfo}
                />
              </Col>
              <Col sm={4}>
                <PhotoUpload 
                  uid={this.state.currentUserId}
                />
                <CalendarComponent />
              </Col>
              <Col sm={4}>
                <PetInfo
                  petName={this.state.pet[this.state.currentPetIndex].petName}
                  birthday={this.state.pet[this.state.currentPetIndex].petBirthday}
                  species={this.state.pet[this.state.currentPetIndex].petSpecies}
                  color={this.state.pet[this.state.currentPetIndex].petColor}
                  breed={this.state.pet[this.state.currentPetIndex].petBreed}
                  sex={this.state.pet[this.state.currentPetIndex].petSex}
                  weight={this.state.pet[this.state.currentPetIndex].petWeight}
                  tag={this.state.pet[this.state.currentPetIndex].petRabiesTag}
                  microchip={this.state.pet[this.state.currentPetIndex].petMicroChip}
                  petId = {this.state.pet.petId}
                  uid={this.state.currentUserId}
                  getUserInfo={this.getUserInfo}
                />
                <img src="https://www.mercypetclinic.org/wp-content/uploads/2018/12/MPC_sliderupdates_mainslider.png" alt="pets" id="pets"/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Profile;
