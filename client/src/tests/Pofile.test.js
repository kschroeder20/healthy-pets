import React from 'react';
import renderer from 'react-test-renderer';
// import ReactDOM from 'react-dom';
// import App from '../App';
import Profile from '../pages/Profile.js';
// import componentWillMount from '../pages/Profile.js';
import axios from 'axios';

test('should return getUserInfo', () => {
    const getUserInfo = [{user: res.data[0]}]
    const resp = getUserInfo;
    axios.get.mockResolvedValue(resp);
    // it('getUserInfo does not return error', () => {
    //     expect(new getUserInfo('111111111')).toHaveProperty("props", "111111111");
    // });
    
});

//Trying to figure out how to access functions within a class.
//They cannot be imported since the class is being exported.
//Mock fuctions seem to be the approach, but having trouble figuring out the syntax.
//using https://jestjs.io/docs/en/tutorial-react for reference.

