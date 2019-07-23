import React, { Component } from 'react';
import Modal from 'react-modal';

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
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(8, 5, 145, 0.6)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

class PetModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      petName: '',
      birthday: '',
      species: '',
      color: '',
      breed: '',
      sex: '',
      weight: '',
      rabies: '',
      microChip: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changePetName = this.changePetName.bind(this);
    this.changeBirthday = this.changeBirthday.bind(this);
    this.changeSpecies = this.changeSpecies.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeBreed = this.changeBreed.bind(this);
    this.changeSex = this.changeSex.bind(this);
    this.changeWeight = this.changeWeight.bind(this);
    this.changeRabies = this.changeRabies.bind(this);
    this.changeMicroChip = this.changeMicroChip.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'rgb(8, 5, 145)';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  changePetName(event) {
    this.setState({ petName: event.target.value });
    console.log(`Pet Name: ${event.target.value}`);
  }

  changeBirthday(event) {
    this.setState({ birthday: event.target.value });
    console.log(`Birthday: ${event.target.value}`);
  }

  changeSpecies(event) {
    this.setState({ species: event.target.value });
    console.log(`Species: ${event.target.value}`);
  }

  changeColor(event) {
    this.setState({ color: event.target.value });
    console.log(`Color: ${event.target.value}`);
  }

  changeBreed(event) {
    this.setState({ breed: event.target.value });
    console.log(`breed: ${event.target.value}`);
  }

  changeSex(event) {
    this.setState({ sex: event.target.value });
    console.log(`sex: ${event.target.value}`);
  }

  changeWeight(event) {
    this.setState({ weight: event.target.value });
    console.log(`weight: ${event.target.value}`);
  }

  changeRabies(event) {
    this.setState({ rabies: event.target.value });
    console.log(`rabies: ${event.target.value}`);
  }

  changeMicroChip(event) {
    this.setState({ microChip: event.target.value });
    console.log(`microchip: ${event.target.value}`);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <button className="edit" onClick={this.openModal}>Edit</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Pet Modal"
        >

          <h2 className="text-center" ref={subtitle => this.subtitle = subtitle}>Pet Information</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" value={this.state.petName} onChange={this.changePetName} placeholder="Pet Name" />
            </div>
            <div className="form-group">
              <input type="date" className="form-control" value={this.state.birthday} onChange={this.changeBirthday} placeholder="Birthday MM/DD/YYYY" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" value={this.state.species} onChange={this.changeSpecies} placeholder="Species" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" value={this.state.color} onChange={this.changeColor} placeholder="Color" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" value={this.state.breed} onChange={this.changeBreed} placeholder="Breed" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" value={this.state.sex} onChange={this.changeSex} placeholder="Sex" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control" value={this.state.weight} onChange={this.changeWeight} placeholder="Weight" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control" value={this.state.rabies} onChange={this.changeRabies} placeholder="Rabies Tag #" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control" value={this.state.microChip} onChange={this.changeMicroChip} placeholder="Microchip #" />
            </div>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <button className="btn btn-danger" onClick={this.closeModal}>Close</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default PetModal;