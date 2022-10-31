import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getDatabase, ref,set} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5UsQwREvr2uX4-cBHVxXDo34EsFZC9rI",
    authDomain: "beta-project-1f826.firebaseapp.com",
    databaseURL: "https://beta-project-1f826-default-rtdb.firebaseio.com",
    projectId: "beta-project-1f826",
    storageBucket: "beta-project-1f826.appspot.com",
    messagingSenderId: "769234658373",
    appId: "1:769234658373:web:f46d50fb3a45cb6639ef2c"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
let userName = document.getElementById('name');
let emailName = document.getElementById('email');
function enterData(e) {
    e.preventDefault();
    set(ref(db, 'users/' +userName.value), {
        Name: userName.value,
        Email:emailName.value
    })

        .then(() => {
        alert('data added')
        })
        .catch((error) => {
        alert(error)
    })
}
document.getElementById('enterID').addEventListener('submit', enterData)