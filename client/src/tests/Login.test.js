import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import determineRepeatUser from '../components/Login';
import createNewUser from '../components/Login';

describe('Endpoints do not return errors', () => {
    it('determineRepeatUser does not return error', () => {
        expect(new determineRepeatUser('111111111')).toHaveProperty("props", "111111111");
    });

    it('createNewUser does not return error', () => {
        const user = {
            ownerName: "Test",
            email: "test@test.com",
            uid: "111111111"
        }
        expect(new createNewUser(user)).toHaveProperty("props", { "email": "test@test.com", "ownerName": "Test", "uid": "111111111" });
    });
});