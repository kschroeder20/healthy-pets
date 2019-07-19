import React, {Component} from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#owner-edit-button');
 
class OwnerModal extends Component {
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
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Edit</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Owner Information</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
                <div className="form-group">
                    <label for="ownerName">Owner Name:</label>
                    <input type="text" className="form-control" id="ownerName" placeholder="Owner Name"/>
                </div>
                <div className="form-group">
                    <label for="homePhone">Home Phone:</label>
                    <input type="tel" className="form-control" id="homePhone" placeholder="###-###-####"/>
                </div>
                <div className="form-group">
                    <label for="cellPhone">Cell Phone:</label>
                    <input type="tel" className="form-control" id="cellPhone" placeholder="###-###-####"/>
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="example@example.com"/>
                </div>
                <div className="form-group">
                    <label for="address">Address:</label>
                    <input type="text" className="form-control" id="address" placeholder="123 Main Street, Anywhere, USA 12345"/>
                </div>
                <div className="form-group">
                    <label for="vetName">Primary Vet Name:</label>
                    <input type="tel" className="form-control" id="vetName" placeholder="Vet Name"/>
                </div>
                <div className="form-group">
                    <label for="vetPhone">Primary Vet Phone:</label>
                    <input type="tel" className="form-control" id="vetPhone" placeholder="###-###-####"/>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default OwnerModal;