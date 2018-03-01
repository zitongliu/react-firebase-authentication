import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDxgIXgE0EcaBePqzaPpN2RVd-M-4IKcKk',
  authDomain: 'react-firebase-authentic-76c04.firebaseapp.com',
  databaseURL: 'https://react-firebase-authentic-76c04.firebaseio.com',
  projectId: 'react-firebase-authentic-76c04',
  storageBucket: 'react-firebase-authentic-76c04.appspot.com',
  messagingSenderId: '355686507457',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
