import React from "react";
import ImageUploader from "react-images-upload";
import "./style.css";

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Pet Pic</h5>
          {console.log(this.state.pictures)}
          <ImageUploader
            withIcon={true}
            buttonText="Upload Pet Pic"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </div>
      </div>
    );
  }
}

export default Picture;
