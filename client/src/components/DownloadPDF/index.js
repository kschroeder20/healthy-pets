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
    this.setState({ currentUserId: userId }, () => console.log("Hello"));
  }

  downloadPDF = (e) =>{
    e.preventDefault();
    API.downloadPDF(this.state.currentUserId)
    .then(function (response) {
      console.log(response)
      // var blob = new Blob([`${response.data}`], {type: "application/pdf"});
      // FileSaver.saveAs(blob, "Healthy-Pet-Info.pdf");
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  render() {
    return (
      <div className="container">
        <button href="javascript:void(0)" download="data.txt" type="button" className="btn btn-primary" onClick={(e) => this.downloadPDF(e)}>Download PDF</button>
      </div>
    );
  }
}
