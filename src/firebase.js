
import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyCwr7rhpUGjyyAMGXChwHi9QGSsal-heF0",
    authDomain: "unichat-72592.firebaseapp.com",
    projectId: "unichat-72592",
    storageBucket: "unichat-72592.appspot.com",
    messagingSenderId: "100508444970",
    appId: "1:100508444970:web:589db735981e7b36e11653",
    measurementId: "G-1LXV33QRQ2"
  
}).auth();