import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import "./style.css";
import Image from "react-bootstrap/Image";

const apiKey = process.env.REACT_APP_FILESTACK_API_KEY;

class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://dummyimage.com/200x200/696669/ffffff&text=Add+a+Photo"
    };
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
            this.setState({
              url: result.filesUploaded[0].url
            });
          }}
          onError={err => console.log(err)}
        />
        <Image
          src={this.state.url}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    );
  }
}

export default PhotoUpload;
