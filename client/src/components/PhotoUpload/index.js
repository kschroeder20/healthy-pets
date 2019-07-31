import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import "./style.css";
import Image from "react-bootstrap/Image";
import API from "../../utils/API";

const apiKey = process.env.REACT_APP_FILESTACK_API_KEY;

class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      petUrl: "https://dummyimage.com/200x200/696669/ffffff&text=Add+a+Photo"
    };
  }

  componentWillMount = () =>{
    this.setState({userId: this.props.uid})
  }

  updateDb = (userId) => {
    API.updatePet({ ...this.state, userId })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="card" id="pet-pic">
        <div className="card-body text-center">
          <h3 className="card-title">
            <strong>Pet Picture</strong>
          </h3>
        </div>
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
            this.setState({petUrl: result.filesUploaded[0].url})
            this.updateDb(this.state.uid)
          }}
          onError={err => console.log(err)}
        />
        <Image
          src={this.state.petUrl}
          style={{ width: "200px", height: "200px", padding: "10px" }}
        />
      </div>
    );
  }
}

export default PhotoUpload;
