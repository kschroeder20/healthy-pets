import React, {Component} from "react";
import OwnerModal from "../Modals/OwnerModal";

class OwnerInfo extends Component {
  // super(props)


  componentWillMount = (props) => {
    console.log(props);
  }

  render () {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Owner Profile</h3>
          <OwnerModal/>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name:{this.props.owner}</li>
          <li className="list-group-item">Home Phone:{this.props.homePhone}</li>
          <li className="list-group-item">Cell Phone:{this.props.cellPhone}</li>
          <li className="list-group-item">Email:{this.props.email}</li>
          <li className="list-group-item">Address:{this.props.address}</li>
          <li className="list-group-item">Primary Vet Name:{this.props.vetName}</li>
          <li className="list-group-item">Primary Vet Phone:{this.props.vetPhone}</li>
        </ul>
      </div>
    );
  }
  
}

export default OwnerInfo;
