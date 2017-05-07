import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDmYFfksNOWlSk7iq_wZublUQK0N81XSPg',
  authDomain: 'react-chat-326c9.firebaseapp.com',
  databaseURL: 'https://react-chat-326c9.firebaseio.com',
  projectId: 'react-chat-326c9',
  storageBucket: 'react-chat-326c9.appspot.com',
  messagingSenderId: '589281379323'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database().ref('messages');
