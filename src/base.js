import firebase from "firebase/app"
require("firebase/auth") 

const app = firebase.initializeApp({
    apiKey: "AIzaSyCVHSMAtVumuAiabVJ5znLexELRTNIqd4g",
    authDomain: "sports-test-25e87.firebaseapp.com",
    projectId: "sports-test-25e87",
    storageBucket: "sports-test-25e87.appspot.com",
    messagingSenderId: "683965670903",
    appId: "1:683965670903:web:2786e992f29b9dbc40baf2"
})

export default app;
