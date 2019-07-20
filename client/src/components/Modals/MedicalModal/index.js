import React, {Component} from 'react';
import Modal from 'react-modal';
import './style.css';
 
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40rem',
    height: '40rem',
    borderRadius: '10px'
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
 
class MedicalModal extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
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

  saveInfo() {
    console.log("info is saved");
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
          contentLabel="Medical Modal"
        >
 
          <h2 class="text-center" ref={subtitle => this.subtitle = subtitle}>Medical History</h2>
          <form>
                <div className="form-group">
                    <label for="medication">Medication:</label>
                    <input type="text" className="form-control" id="medication" placeholder="Medication List"/>
                </div>
                <div className="form-group">
                    <label for="vaccines">Vaccines:</label>
                    <input type="text" className="form-control" id="vaccines" placeholder="Vaccines"/>
                </div>
                <div className="form-group">
                    <label for="allergies">Allergies:</label>
                    <input type="text" className="form-control" id="allergies" placeholder="Allergies"/>
                </div>
                <div className="form-group">
                    <label for="food">Food:</label>
                    <input type="text" className="form-control" id="food" placeholder="Food"/>
                </div>
                <div className="form-group">
                    <label for="procedures">Procedures</label>
                    <input type="text" className="form-control" id="procedures" placeholder="Procedures"/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.saveInfo}>Save</button>
                <button class="btn btn-danger" onClick={this.closeModal}>Close</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default MedicalModal;