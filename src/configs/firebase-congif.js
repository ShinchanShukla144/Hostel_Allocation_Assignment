import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBtZH0iaiqRBx4fz3JqqmKNt1gOcnBiYso",
    authDomain: "hostel-booking-app-2a437.firebaseapp.com",
    projectId: "hostel-booking-app-2a437",
    storageBucket: "hostel-booking-app-2a437.appspot.com",
    messagingSenderId: "178047011749",
    appId: "1:178047011749:web:04b144686ef496395c764c",
    measurementId: "G-038G9MP6E2"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;