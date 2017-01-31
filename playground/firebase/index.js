import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCw_CpYSitCKspHXReWXxTB-VoAyR2RSmc",
  authDomain: "grillo-todo-app.firebaseapp.com",
  databaseURL: "https://grillo-todo-app.firebaseio.com",
  storageBucket: "grillo-todo-app.appspot.com",
  messagingSenderId: "699092510324"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Joey',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: '1 Todo'
});

todosRef.push({
  text: 'Clean the dog'
});
