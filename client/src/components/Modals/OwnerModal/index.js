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

class OwnerModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      owner: '',
      homePhone: '',
      cellPhone: '',
      email: '',
      address: '',
      vetName: '',
      vetPhone: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeOwner = this.changeOwner.bind(this);
    this.changeHomePhone = this.changeHomePhone.bind(this);
    this.changeCellPhone = this.changeCellPhone.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeVetName = this.changeVetName.bind(this);
    this.changeVetPhone = this.changeVetPhone.bind(this);
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

  changeOwner(event) {
    this.setState({ owner: event.target.value });
    console.log(`Owner: ${event.target.value}`);
  }

  changeHomePhone(event) {
    this.setState({ homePhone: event.target.value });
    console.log(`Home Phone: ${event.target.value}`);
  }

  changeCellPhone(event) {
    this.setState({ cellPhone: event.target.value });
    console.log(`Cell Phone: ${event.target.value}`);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
    console.log(`Email: ${event.target.value}`);
  }

  changeAddress(event) {
    this.setState({ address: event.target.value });
    console.log(`Address: ${event.target.value}`);
  }

  changeVetName(event) {
    this.setState({ vetName: event.target.value });
    console.log(`Vet Name: ${event.target.value}`);
  }

  changeVetPhone(event) {
    this.setState({ vetPhone: event.target.value });
    console.log(`Vet Phone: ${event.target.value}`);
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.changeOwner();
    // this.changeHomePhone();
    // this.changeCellPhone();
    // this.changeEmail();
    // this.changeAddress();
    // this.changeVetName();
    // this.changeVetPhone();
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
          contentLabel="Owner Modal"
        >

          <h2 className="text-center" ref={subtitle => this.subtitle = subtitle}>Owner Information</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" value={this.state.owner} onChange={this.changeOwner} placeholder="Owner Name" />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control" value={this.state.homePhone} onChange={this.changeHomePhone} placeholder="Home Phone" />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control" value={this.state.cellPhone} onChange={this.changeCellPhone} placeholder="Cell Phone" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" value={this.state.email} onChange={this.changeEmail} placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" value={this.state.address} onChange={this.changeAddress} placeholder="Address" />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control" value={this.state.vetName} onChange={this.changeVetName} placeholder="Vet Name" />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control" value={this.state.vetPhone} onChange={this.changeVetPhone} placeholder="Vet Phone Number" />
            </div>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <button className="btn btn-danger" onClick={this.closeModal}>Close</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default OwnerModal;