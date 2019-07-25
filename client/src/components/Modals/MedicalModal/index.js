import React, { Component } from 'react';
import Modal from 'react-modal';
import './style.css';
import API from "../../../utils/API";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    height: "40rem",
    borderRadius: "10px"
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(8, 5, 145, 0.6)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

class MedicalModal extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
    petMedications: [],
    petInoculations: [],
    petAllergies: "",
    petFood: [],
    petProcedures: [],
    currentUserId: '',
    };
  }

  componentDidMount = () => {
    const url = window.location.pathname;
    const pathnameArr = url.split("/");
    const userId = pathnameArr[pathnameArr.length - 1];
    this.setState({ currentUserId: userId });
  };


  handleSubmit(event) {
    event.preventDefault();
    this.updateDb(this.state.currentUserId);
    this.closeModal();
  }

  updateDb = (userId) => {
    API.updatePet({ ...this.state, userId })
      .then(res => {
        // ADD CODE TO SEND TO CARD HERE
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "rgb(8, 5, 145)";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <button className="edit" onClick={this.openModal}>
          Edit
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Medical Modal"
        >
          <h2
            className="text-center"
            ref={subtitle => (this.subtitle = subtitle)}
          >
            Medical History
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="petMedications"
                value={this.state.petMedications}
                onChange={this.handleChange}
                placeholder="Medication List"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="petInoculations"
                value={this.state.petInoculations}
                onChange={this.handleChange}
                placeholder="Inoculations"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.petAllergies}
                id='petAllergies'
                onChange={this.handleChange}
                placeholder="Allergies"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.petFood}
                id="petFood"
                onChange={this.handleChange}
                placeholder="Food"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="petProcedures"
                value={this.state.petProcedures}
                onChange={this.handleChange}
                placeholder="Procedures"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              color="primary"
              className="btn btn-primary"
            />
            <button className="btn btn-danger" onClick={this.closeModal}>
              Close
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default MedicalModal;
