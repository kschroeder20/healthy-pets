import React from 'react';
//import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import Profile from '../pages/Profile.js'
import getUserInfo from '../pages/Profile.js';
import getPetInfo from '../pages/Profile.js';
import writeFiles from '../pages/Profile.js';
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Endpoints do not return errors', () => {

    it('getUserInfo does not return error', () => {
								const user = new getUserInfo()
        console.log(user)
        // expect(new getUserInfo('111111111')).toHaveProperty("props", "111111111");
    });

    // it('getPetInfo does not return error', () => {
    //     expect(new getPetInfo('111111111')).toHaveProperty("props", "111111111");
    // });

    // it('getPetInfo does not return error', () => {
    //     const profilePage = shallow(<Profile />)
    //     profilePage.setState({currentUserId: 1111, currentPetId: 1111})
    //     expect(new writeFiles()).toHaveProperty("props", "1111");
    // });

});

