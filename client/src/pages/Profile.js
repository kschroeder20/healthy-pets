import React, { Component } from "react";
import OwnerInfo from "../components/Cards/OwnerInfo";
import PetInfo from "../components/Cards/PetInfo";
import Medical from "../components/Cards/MedicalHistory";
import NavBar from "../components/NavBar";
import PetNav from "../components/PetNav";
import DownloadPDF from "../components/DownloadPDF";
import { Container, Row, Col } from "react-grid-system";
import API from "../utils/API";
import CalendarComponent from "../components/Calendar";

const cp = require('child_process');

class Profile extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: "",
    currentUserId: 0,
    isSignedIn: '',
    user: {}
  };

  componentDidMount = () => {
    const url = window.location.pathname;
    const pathnameArr = url.split('/');
    const userId = pathnameArr[pathnameArr.length - 1];
    // console.log(userId);
    this.setState({ currentUserId: userId }, () => this.getUserInfo(userId));
  }

  getUserInfo = (userId) => {
    API.getPetById(userId)
      .then(res => {
        this.setState({ user: res.data[0] })
        // console.log(this.state.user);
      })
      .catch(err => console.log(err));
  }

  handleLogout = (e) => {
    this.setState({ isSignedIn: false })
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <NavBar />
        <PetNav />
        <div>
          <Container>
            <DownloadPDF />
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
                  getUserInfo={this.getUserInfo}  />
                <Medical
                  medications={this.state.user.petMedications}
                  vaccines={this.state.user.petInoculations}
                  allergies={this.state.user.petAllergies}
                  food={this.state.user.petFood}
                  procedures={this.state.user.petProcedures}
                  uid={this.state.currentUserId}
                  getUserInfo={this.getUserInfo}  />
              </Col>
              <Col sm={4}>
                <CalendarComponent />
              </Col>
              <Col sm={4}>
                <PetInfo
                  petName={this.state.user.petName}
                  birthday={this.state.user.petBirthday}
                  species={this.state.user.petSpecies}
                  color={this.state.user.petColor}
                  breed={this.state.user.petBreed}
                  sex={this.state.user.petSex}
                  weight={this.state.user.petWeight}
                  tag={this.state.user.petRabiesTag}
                  microchip={this.state.user.petMicroChip}
                  uid={this.state.currentUserId} 
                  getUserInfo={this.getUserInfo} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Profile;
