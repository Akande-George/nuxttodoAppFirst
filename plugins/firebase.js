import * as firebase from 'firebase/app'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCUKk-JiGWLPtpruqKC5vDuNCv57PkJs-s",
  authDomain: "nuxttodoapp-836bb.firebaseapp.com",
  databaseURL: "https://nuxttodoapp-836bb.firebaseio.com",
  projectId: "nuxttodoapp-836bb",
  storageBucket: "nuxttodoapp-836bb.appspot.com",
  messagingSenderId: "1023791419411",
  appId: "1:1023791419411:web:25c63793733a07e3bf2fe6"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}