import React, { Component } from "react";
import API from "../../utils/API";

const download = require('in-browser-download');

export default class index extends Component {
  state = {
    isSignedIn: false,
    currentUserId: 0
  };

  componentDidMount = () => {
    const url = window.location.pathname;
    const pathnameArr = url.split("/");
    const userId = pathnameArr[pathnameArr.length - 1];
    this.setState({ currentUserId: userId });
  };

  downloadPDF = e => {
    e.preventDefault();
    API.downloadPDF(this.state.currentUserId)
      .then ((response) => {
        download(response.data, `Healthy_Pet_Report_${this.state.currentUserId}`);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <button
          href="/profile"
          type="button"
          variant="secondary"
          className="btn btn-secondary"
          onClick={e => this.downloadPDF(e)}
        >
          Download PDF
        </button>
      </div>
    );
  }
}
