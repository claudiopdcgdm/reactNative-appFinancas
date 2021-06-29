import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


let firebaseConfig = {
    apiKey: "AIzaSyCKoEB1NVd7k0p_BOypJkOEjXQ9rD7a6DI",
    authDomain: "myapp-3b66e.firebaseapp.com",
    databaseURL: "https://myapp-3b66e.firebaseio.com",
    projectId: "myapp-3b66e",
    storageBucket: "myapp-3b66e.appspot.com",
    messagingSenderId: "758011673244",
    appId: "1:758011673244:web:ffe34817dd28c944614b59",
    measurementId: "G-XKSM49TCSY"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase
