import firebase from 'firebase';

const firebaseCreate = () => {
  console.log('firebaseCreate');
  const config = {
    apiKey: 'AIzaSyDDxDFBvqvSneXTZC7moqYYk7pww9I1dWo',
    authDomain: 'auth-e7bec.firebaseapp.com',
    databaseURL: 'https://auth-e7bec.firebaseio.com',
    projectId: 'auth-e7bec',
    storageBucket: 'auth-e7bec.appspot.com',
    messagingSenderId: '708656707639',
    appId: '1:708656707639:web:99601baf2129f8955227b2',
    measurementId: 'G-LYJ0WM3084',
  };

  if (firebase.apps.length === 0) {
    console.log('firebase.initializeApp');
    firebase.initializeApp(config);
  }
};

export default firebaseCreate();
