import React, { Component } from "react";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    height: "40rem"
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(12, 6, 102, 0.6)"
  }
};

Modal.setAppElement(document.getElementById("root"));

class OwnerModal extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalIsOpen: false,
      ownerName: "",
      homePhone: "",
      mobilePhone: "",
      email: "",
      address: "",
      vetName: "",
      vetPhone: "",
      currentUserId: ""
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const pathnameArr = url.split("/");
    const userId = pathnameArr[pathnameArr.length - 1];
    axios
      .get(`/api/users/${userId}`)
      .then(res => {
        this.setState({
          ownerName: res.data[0].ownerName,
          homePhone: res.data[0].homePhone,
          mobilePhone: res.data[0].mobilePhone,
          email: res.data[0].email,
          address: res.data[0].address,
          vetName: res.data[0].vetName,
          vetPhone: res.data[0].vetPhone,
          currentUserId: res.data[0].uid
        });
      })
      .catch(err => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.updateDb(this.state.currentUserId);
    this.closeModal();
  }

  updateDb(userId) {
    let userObj = {
      ownerName: this.state.ownerName,
      homePhone: this.state.homePhone,
      mobilePhone: this.state.mobilePhone,
      email: this.state.email,
      address: this.state.address,
      vetName: this.state.vetName,
      vetPhone: this.state.vetPhone,
      userId: userId
    };

    axios
      .put(`/api/users/${userId}`, userObj)
      .then(res => {
        console.log("user updated");
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
    this.props.modalUpdate();
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
          contentLabel="Owner Modal"
        >
          <h2
            className="text-center"
            ref={subtitle => (this.subtitle = subtitle)}
          >
            Owner Information
          </h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="ownerName">Enter Your Name</label>
            <input
              type="text"
              className="form-control"
              id="ownerName"
              value={this.state.ownerName}
              onChange={this.handleChange}
            />
            <label for="homePhone">Home Phone</label>
            <input
              type="tel"
              className="form-control"
              id="homePhone"
              onChange={this.handleChange}
              value={this.state.homePhone}
            />
            <label for="mobilePhone">Cell Phone</label>
            <input
              type="tel"
              className="form-control"
              id="mobilePhone"
              onChange={this.handleChange}
              value={this.state.mobilePhone}
            />
            <label for="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <label for="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              onChange={this.handleChange}
              value={this.state.address}
            />
            <label for="vetName">Vet Name</label>
            <input
              type="tel"
              className="form-control"
              id="vetName"
              onChange={this.handleChange}
              value={this.state.vetName}
            />
            <label for="vetPhone">Vet Phone</label>
            <input
              type="tel"
              className="form-control"
              id="vetPhone"
              onChange={this.handleChange}
              value={this.state.vetPhone}
            />
            <button className="btn btn-primary">Submit</button>
            <button className="btn btn-danger" onClick={this.closeModal}>
              Close
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default OwnerModal;
