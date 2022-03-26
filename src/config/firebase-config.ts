import { initializeApp } from 'firebase/app';
import {
   GoogleAuthProvider,
   getAuth,
   signInWithPopup,
   signInWithEmailAndPassword,
   sendPasswordResetEmail,
   signOut,
   createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
   try {
      const res = await signInWithPopup(auth, googleProvider);

      if (res) {
         const user = res.user;
         return user;
      }
   } catch (err: any) {
      alert(err.message);
   }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
   try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
         const user = res.user;

         console.log(res);

         return user;
      }
   } catch (err: any) {
      alert(err.message);
   }
};

const sendPasswordReset = async (email: string) => {
   try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset link sent!');
   } catch (err: any) {
      console.error(err);
      alert(err.message);
   }
};

const logout = () => {
   signOut(auth);
};

export {
   auth,
   db,
   signInWithGoogle,
   logInWithEmailAndPassword,
   sendPasswordReset,
   logout,
};
