import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6Tc5OlhPFwY5jn_yaiUQBvseaDcvJZFw",
    authDomain: "cut-smartbanking-app.firebaseapp.com",
    databaseURL: "https://cut-smartbanking-app-default-rtdb.firebaseio.com",
    projectId: "cut-smartbanking-app",
    storageBucket: "cut-smartbanking-app.appspot.com",
    messagingSenderId: "227599926991",
    appId: "1:227599926991:web:ffe956ae7841ae5290d9ba",
    measurementId: "G-8XN2N0E4J7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };