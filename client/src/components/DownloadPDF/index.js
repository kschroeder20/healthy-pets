import React, { Component } from "react";
import API from "../../utils/API";
import Axios from "axios";

const FileSaver = require('file-saver');
const fs = require('fs');


export default class index extends Component {
  state = {
    isSignedIn: false,
    currentUserId: 0
  };

  componentDidMount = () => {
    const url = window.location.pathname;
    const pathnameArr = url.split("/");
    const userId = pathnameArr[pathnameArr.length - 1];
    this.setState({ currentUserId: userId }, () => this.downloadPDF(this.state.currentUserId));
  }

  // getPetInfo = (userId) =>{
  //   API.downloadPDF(userId).then(res => {
  //     console.log(res);
  //   }).catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // }

  // constructPDF = (pet) =>{
  //   fs.writeFile('pdfinfo.txt', `${pet}`, function (err) {
  //     if (err) console.log(err);
  //     console.log('Saved!');
  //   });
  // }

  downloadPDF = (userId) =>{
    console.log(userId)
    API.downloadPDF(userId)
    .then(function (response) {
      var blob = new Blob([`${response.data}`], {type: "application/pdf"});
      FileSaver.saveAs(blob, "hello world.pdf");
      //console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  render() {
    return (
      <div className="container">
        <button href="javascript:void(0)" download="data.txt" type="button" className="btn btn-primary" onClick={this.downloadPDF}>Download PDF</button>
      </div>
    );
  }
}
