import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAw76TIKzTOS3xe3r1yO7m7QnHEQ-3yvR0" ,
  authDomain: "e-object-190716.firebaseapp.com",
  databaseURL: "https://e-object-190716.firebaseio.com",
  projectId: "e-object-190716",
  storageBucket: '',
  messagingSenderId: "363961907860 ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
