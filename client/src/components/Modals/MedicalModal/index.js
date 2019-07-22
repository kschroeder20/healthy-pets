import React, { Component } from "react";
import Modal from "react-modal";
import "./style.css";

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
Modal.setAppElement("#root");

class MedicalModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      medication: "",
      vaccines: "",
      allergies: "",
      food: "",
      procedures: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeMedication = this.changeMedication.bind(this);
    this.changeVaccines = this.changeVaccines.bind(this);
    this.changeAllergies = this.changeVaccines.bind(this);
    this.changeFood = this.changeFood.bind(this);
    this.changeProcedures = this.changeProcedures.bind(this);
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

  changeMedication(event) {
    console.log("medication is saved");
    this.setState({ medication: event.target.value });
  }

  changeVaccines(event) {
    console.log("vaccine is saved");
    this.setState({ vaccines: event.target.value });
  }

  changeAllergies(event) {
    console.log("allergies are saved");
    this.setState({ allergies: event.target.value });
  }

  changeFood(event) {
    console.log("food is saved");
    this.setState({ food: event.target.value });
  }

  changeProcedures(event) {
    console.log("procedures are saved");
    this.setState({ procedures: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

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
          <form onSubmit={this.handleSubmit} method="POST">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.medication}
                onChange={this.changeMedication}
                placeholder="Medication List"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.vaccines}
                onChange={this.changeVaccines}
                placeholder="Vaccines"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.allergies}
                onChange={this.changeAllergies}
                placeholder="Allergies"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.food}
                onChange={this.changeFood}
                placeholder="Food"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.procedures}
                onChange={this.changeProcedures}
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
