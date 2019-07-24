import React, { Component } from 'react';
import Modal from 'react-modal';
import API from "../../../utils/API";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40rem',
    height: '40rem'
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
Modal.setAppElement(document.getElementById('root'));

class PetModal extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      name: '',
      birthday: '',
      species: '',
      color: '',
      breed: '',
      sex: '',
      weight: 0,
      rabiesTag: 0,
      microchip: 0,
      currentUserId: ''

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
  }

  updateDb = (userId) => {
    API.updatePet({ ...this.state, userId })
      .then(res => {
        // ADD CODE TO SEND TO CARD HERE
        console.log(res);
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
          contentLabel="Pet Modal"
        >
          <h2
            className="text-center"
            ref={subtitle => (this.subtitle = subtitle)}
          >
            Pet Information
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                id="name"
                onChange={this.handleChange}
                placeholder="Pet Name"
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                value={this.state.birthday}
                id="birthday"
                onChange={this.handleChange}
                placeholder="Birthday MM/DD/YYYY"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.species}
                id="species"
                onChange={this.handleChange}
                placeholder="Species"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.color}
                id="color"
                onChange={this.handleChange}
                placeholder="Color"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.breed}
                id="breed"
                onChange={this.handleChange}
                placeholder="Breed"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.sex}
                id="sex"
                onChange={this.handleChange}
                placeholder="Sex"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                value={this.state.weight}
                id="weight"
                onChange={this.handleChange}
                placeholder="Weight"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                value={this.state.rabiesTag}
                id="rabiesTag"
                onChange={this.handleChange}
                placeholder="Rabies Tag #"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                value={this.state.microChip}
                id="microChip"
                onChange={this.handleChange}
                placeholder="Microchip #"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              color="primary"
              className="btn btn-primary"
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

export default PetModal;
