import React, { Component } from 'react'

class Profile extends Component {
    state = {
        currentUserName: '',
        currentUserEmail: ''
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name,
        })
    }
    render() {
        const { currentUserEmail, currentUserName } = this.state;
        return (
            <div>
                <h1>Welcome {currentUserName}</h1>
                <p>Email: {currentUserEmail}</p>
                <p>This is where we are going to put all of our pet information</p>
            </div>
        )
    }
}

export default Profile