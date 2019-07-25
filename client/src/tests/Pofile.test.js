import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import getUserInfo from '../pages/Profile.js';

describe('Endpoints do not return errors', () => {

    it('getUserInfo does not return error', () => {
        expect(new getUserInfo('111111111')).toHaveProperty("props", "111111111");
    });
});
