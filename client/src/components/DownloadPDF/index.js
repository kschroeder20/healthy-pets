import React, { Component } from "react";
import API from "../../utils/API";

//const streamBuffers = require('stream-buffers');

//const fs = require('fs');
//const download = require('download');
const FileSaver = require('file-saver');


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
      var blob = new Blob([`${response.data}`], {type: "application/pdf"});
      FileSaver.saveAs(blob, "hello world.pdf");
      console.log(response);
      //var encodedData = window.btoa(response.data); // encode a string
      //var decodedData = window.atob(encodedData); // decode the string

      // var byteArray = response.data;
      // var pdfAsDataUri = "data:application/pdf;base64,"+byteArray;
      // window.open(pdfAsDataUri);

      //console.log(encodedData)
      
      


      //this.download(response.data);






      
    //   //var download = document.querySelector(`a${download}`);
    //   var downloadUrl = null;
    //   var blob = new Blob(
    //     [response.data], // Data is a buffer!
    //     {
    //         type: 'text/plain;charset=utf-8'
    //     }
    // );
    // downloadUrl = URL.createObjectURL(blob);


    // // console.group("Object URL");
    // console.log("Text: ", response.data);
    // console.log("URL: ",downloadUrl);

    // saveData

    // download.setAttribute('href', downloadUrl);
    // console.groupEnd();
    







        //console.log(response.data)
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
        <button href="javascript:void(0)" download="data.txt" type="button" className="btn btn-primary" onClick={this.downloadPDF}>Download PDF</button>
      </div>
    );
  }
}
