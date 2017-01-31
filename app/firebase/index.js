import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCw_CpYSitCKspHXReWXxTB-VoAyR2RSmc",
    authDomain: "grillo-todo-app.firebaseapp.com",
    databaseURL: "https://grillo-todo-app.firebaseio.com",
    storageBucket: "grillo-todo-app.appspot.com",
    messagingSenderId: "699092510324"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
