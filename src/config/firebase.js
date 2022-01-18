import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyCpuTs2lxIx4kWERMjG8JOMJhpjrzLlEQA',
   authDomain: 'finance-app-9632c.firebaseapp.com',
   databaseURL: 'https://finance-app-9632c-default-rtdb.firebaseio.com',
   projectId: 'finance-app-9632c',
   storageBucket: 'finance-app-9632c.appspot.com',
   messagingSenderId: '463177023067',
   appId: '1:463177023067:web:548af7f4dfe5640fd2097e',
   measurementId: 'G-09R09F757Q',
};

const firebaseApp = initializeApp(firebaseConfig);

export const authFirebase = getAuth(firebaseApp);
