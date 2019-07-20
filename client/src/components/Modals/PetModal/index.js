import React, {Component} from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '40rem',
    height                : '40rem'
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
Modal.setAppElement('#root');
 
class PetModal extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'rgb(8, 5, 145)';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
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
 
          <h2 class="text-center" ref={subtitle => this.subtitle = subtitle}>Pet Information</h2>
          <form>
                <div className="form-group">
                    <label for="petName">Pet Name:</label>
                    <input type="text" className="form-control" id="petName" placeholder="Owner Name"/>
                </div>
                <div className="form-group">
                    <label for="birthday">Birthday:</label>
                    <input type="date" className="form-control" id="birthday" placeholder="MM/DD/YYYY"/>
                </div>
                <div className="form-group">
                    <label for="species">Species:</label>
                    <input type="text" className="form-control" id="species" placeholder="Species"/>
                </div>
                <div className="form-group">
                    <label for="color">Color:</label>
                    <input type="text" className="form-control" id="color" placeholder="Color"/>
                </div>
                <div className="form-group">
                    <label for="breed">Breed:</label>
                    <input type="text" className="form-control" id="breed" placeholder="Breed"/>
                </div>
                <div className="form-group">
                    <label for="sex">Pet Sex:</label>
                    <input type="text" className="form-control" id="sex" placeholder="Sex"/>
                </div>
                <div className="form-group">
                    <label for="weight">Weight:</label>
                    <input type="number" className="form-control" id="weight" placeholder="Weight"/>
                </div>
                <div className="form-group">
                    <label for="tag">Rabies Tag#:</label>
                    <input type="number" className="form-control" id="tag" placeholder="Rabies Tag #"/>
                </div>
                <div className="form-group">
                    <label for="microchip">Microchip#:</label>
                    <input type="number" className="form-control" id="microchip" placeholder="Microchip #"/>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
                <button class="btn btn-danger" onClick={this.closeModal}>Close</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default PetModal;