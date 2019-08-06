import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import "./style.css";
import axios from "axios";

const apiKey = process.env.REACT_APP_FILESTACK_API_KEY;

class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      currentPetId: 0,
      petUrl: "https://dummyimage.com/200x200/696669/ffffff&text=Add+a+Photo",
      modalIsOpen: true
    };
  }

  componentDidMount() {
    this.setState({
      userId: this.props.uid,
      currentPetId: this.props.petId,
      petUrl: this.props.petUrl
    });
    this.props.modalOpen(true);
    this.findPetPic();
  }

  findPetPic() {
    axios
      .get(`/api/pets/pic/${this.props.petId}`)
      .then(res => {
        this.setState({
          petUrl: res.data[0].petUrl
        });
      })
      .catch(err => console.log(err));
  }

  //Updates the peturl to the db.
  updateDb(petId) {
    let photoUrl = this.state.petUrl;
    axios
      .put(`/api/pets/update/${petId}`, {
        petUrl: photoUrl,
        currentPetId: petId
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  closeModal = () => {
    this.props.updatedModal(this.props.currentPetId);
    this.setState({ modalIsOpen: false });
    this.props.modalOpen(false);
  };

  render() {
    return (
      <div id="pet-pic">
        <div className="card-body text-center">
          <h3 className="card-title">
            <strong>Pet Picture</strong>
          </h3>
          <ReactFilestack
            apikey={apiKey}
            componentDisplayMode={{
              type: "button",
              customText: "Upload Photo"
            }}
            clientOptions={{
              accept: "image/*",
              fromSources: ["local_file_system"],
              maxSize: 1024 * 1024,
              maxFiles: 1
            }}
            onSuccess={result => {
              this.setState({ petUrl: result.filesUploaded[0].url });
              this.updateDb(this.props.petId);
              this.closeModal();
            }}
            onRequestClose={this.closeModal}
            onError={err => console.log(err)}
          />
        </div>
      </div>
    );
  }
}

export default PhotoUpload;
