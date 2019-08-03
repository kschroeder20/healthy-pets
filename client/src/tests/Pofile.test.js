import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
// import { shallow } from 'enzyme';
import Profile from '../pages/Profile'

// import getUserInfo from '../pages/Profile.js';
// import getPetInfo from '../pages/Profile.js';
// import writeFiles from '../pages/Profile.js';
// import Enzyme from 'enzyme';

jest.mock('../pages/Profile.js');

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Profile.mockClear();
  });

  it('We can check if the consumer called a method on the class instance', () => {
    // Show that mockClear() is working:
    expect(Profile).not.toHaveBeenCalled();

    const  newProfile = new Profile;

    newProfile.getUserInfo(1);
  
    // const soundPlayerConsumer = new SoundPlayerConsumer();
    // // Constructor should have been called again:
    // expect(SoundPlayer).toHaveBeenCalledTimes(1);
  
    // const coolSoundFileName = 'song.mp3';
    // soundPlayerConsumer.playSomethingCool();
  
    // // mock.instances is available with automatic mocks:
    // const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
    // const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
    // expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
    // // Equivalent to above check:
    // expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
    // expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
  });

// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });


// describe('Endpoints do not return errors', () => {

//     it('getUserInfo does not return error', () => {
// 	    console.log(Profile.getUserInfo())

//     });

//     // it('getPetInfo does not return error', () => {
//     //     expect(new getPetInfo('111111111')).toHaveProperty("props", "111111111");
//     // });

//     // it('getPetInfo does not return error', () => {
//     //     const profilePage = shallow(<Profile />)
//     //     profilePage.setState({currentUserId: 1111, currentPetId: 1111})
//     //     expect(new writeFiles()).toHaveProperty("props", "1111");
//     // });

// });

