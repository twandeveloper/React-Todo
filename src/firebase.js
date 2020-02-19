import firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyABqQmKszgYl8fv_Pvod5RVxCypwAaHdbo",
    authDomain: "react-todo-7fc87.firebaseapp.com",
    databaseURL: "https://react-todo-7fc87.firebaseio.com",
    projectId: "react-todo-7fc87",
    storageBucket: "react-todo-7fc87.appspot.com",
    messagingSenderId: "443085753519",
    appId: "1:443085753519:web:71d1946abf0cd85a76d85a",
    measurementId: "G-E6B42V1FER"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;