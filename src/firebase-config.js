import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: 'AIzaSyCch1BCluGxzQPxu8Pcok6olwqguxkYPxY',
    authDomain: 'movie-app-380ed.firebaseapp.com',
    projectId: 'movie-app-380ed',
    storageBucket: 'movie-app-380ed.appspot.com',
    messagingSenderId: '1006510326838',
    appId: '1:1006510326838:web:56490e6fe238dc512f4497'
};


const app = initializeApp (firebaseConfig);
export const db = getFirestore (app);
export const storage = getStorage(app);
export const auth = getAuth ();
