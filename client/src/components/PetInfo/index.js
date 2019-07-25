import React, {Component} from "react";
import PetModal from "../Modals/PetModal";
import Axios from "axios";

class PetInfo extends Component {

  componentWillMount = (uid) => {
        Axios.get(`/api/pets/${uid}`)
    .then(res =>  {
      console.log(res)
    });
  }
        
        render() {
        return (
        <div className="card" id="pet-card">
        <div className="card-body">
          <h3 className="card-title">Pet Profile</h3>
          <PetModal/>
        </div>
        <ul className="list-group list-group-flush">
           <li className="list-group-item"><strong>Name: </strong> {this.props.petName}</li>
          <li className="list-group-item"><strong>Birthday: </strong> {this.props.birthday}</li>
          <li className="list-group-item"><strong>Species: </strong> {this.props.species}</li>
          <li className="list-group-item"><strong>Color: </strong> {this.props.color}</li>
          <li className = "list-group-item"><strong>Breed: </strong> {this.props.breed}</li>
          <li className="list-group-item"><strong>Pet Sex: </strong> {this.props.sex}</li>
          <li className="list-group-item"><strong>Weight: </strong> {this.props.weight}</li>
          <li className="list-group-item"><strong>Rabies Tag#: </strong> {this.props.tag}</li>
          <li className="list-group-item"><strong>Microchip#: </strong> {this.props.microchip}</li>
        </ul>
      </div>
    );
  }
  }


export default PetInfo;