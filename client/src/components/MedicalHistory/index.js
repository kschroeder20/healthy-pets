import React, {Component} from "react";
import "./style.css";
import MedicalModal from "../Modals/MedicalModal";
import Axios from "axios";

class Medical extends Component {

  componentWillMount = (uid) => {
    Axios.get(`/api/pets/${uid}`)
    .then(res => {
      // this.setState({ props.ownerData })
      console.log(res)
    });
    // console.log(props);
  }

  render () {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Medical History</h3>
          <MedicalModal />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Medications: </strong>{this.props.medications}</li>
          <li className="list-group-item"><strong>Vaccines: </strong>{this.props.vaccines}</li>
          <li className="list-group-item"><strong>Allergies: </strong>{this.props.allergies}</li>
          <li className="list-group-item"><strong>Food: </strong>{this.props.food}</li>
          <li className="list-group-item"><strong>Procedures: </strong>{this.props.procedures}</li>
        </ul>
      </div>
    );
  }
}

export default Medical;