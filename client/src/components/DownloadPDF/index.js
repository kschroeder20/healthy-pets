import React, { Component } from "react";
import API from "../../utils/API";

//const fs = require('fs');
//const download = require('download');


export default class index extends Component {
  state = {
    isSignedIn: false
  };

//   downloadPDF = function(req,res){
//     var jsonData = '{ property: abc }';
//     var {spawn} = require('child_process');
//     var child = spawn('ruby', ['pdf.rb', jsonData]);
//     var pdf = '';
  
//     var chunks = [];
  
//     child.stdout.on('data', function(data) {
//       // insert error check here...
//       console.log("here")
//       chunks.push(data);
//     });
//     child.on('close', function() {
//       var pdf = Buffer.concat(chunks);
//       res.setHeader('Content-Type', 'application/text');
//       res.send(pdf);
//     });
//   };

  downloadPDF = () =>{
    API.downloadPDF('1')
    .then(function (response) {
      // handle success
//       download('http://unicorn.com/foo.jpg', 'dist').then(() => {
//     console.log('done!');
// });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  render() {
    return (
      <div className="container">
        <button type="button" className="btn btn-primary" onClick={this.downloadPDF}>Download PDF</button>
      </div>
    );
  }
}
