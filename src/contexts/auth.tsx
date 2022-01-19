import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { authFirebase } from '../config/firebase';
import { api } from '../services/api';

type User = {
   id: string;
   name: string;
   email: string;
   avatar: string;
};

type AuthContextData = {
   user: User | null;
   signInUrl: string;
   signInUrlDev: string;
   signOut: () => void;
   handleLoginWithGoogle: () => void;
   isLoading: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProver = {
   children: ReactNode;
};

type AuthResponse = {
   user: {
      displayName: string;
      email: string;
      photoURL: string;
   };
};

export function AuthProvider({ children }: AuthProver) {
   const [user, setUser] = useState<User | null>(null);
   const [isLoading, setIsLoading] = useState(false);

   const signInUrl = `${process.env.REACT_APP_SIGNIN_URL}${process.env.REACT_APP_CLIENT_ID}`;
   const signInUrlDev = `${process.env.REACT_APP_SIGNIN_URL}${process.env.REACT_APP_CLIENT_ID_DEV}`;

   // async function signIn(githubCode: string) {
   //    setIsLoading(true);
   //    const response = await api.post<AuthResponse>('authenticate', {
   //       code: githubCode,
   //    });

   //    const { token, user } = response.data;

   //    setUser(user);

   //    localStorage.setItem('@appFinance:token', token);

   //    api.defaults.headers.common.authorization = `Bearer ${token}`;

   //    setIsLoading(false);
   // }

   function signOut() {
      setUser(null);
      localStorage.removeItem('@appFinance:token');
   }

   const handleLoginWithGoogle = () => {
      const google_provider = new GoogleAuthProvider();

      signInWithPopup(authFirebase, google_provider)
         .then((result: any) => {
            api.post('authenticate', {
               name: result.user.displayName,
               email: result.user.email,
               avatar: result.user.photoURL,
            })
               .then((response: any) => {
                  setUser(response.data);
               })
               .catch((error: any) => {
                  console.log('error auth api', error);
               });
         })
         .catch((error: any) => {
            console.log('error auth google', error);
         });
   };

   // useEffect(() => {
   //    const token = localStorage.getItem('@appFinance:token');

   //    if (token) {
   //       api.defaults.headers.common.authorization = `Bearer ${token}`;
   //       api.get<User>('profile').then((response) => {
   //          setUser(response.data);
   //       });
   //    }
   // }, []);

   // useEffect(() => {
   //    const url = window.location.href;
   //    const hasGithubCode = url.includes('?code=');

   //    if (hasGithubCode) {
   //       const [urlWihoutCode, githubCode] = url.split('?code=');

   //       window.history.pushState({}, '', urlWihoutCode);

   //       signIn(githubCode);
   //    }
   // }, []);

   useEffect(() => {
      api.interceptors.response.use(
         function (response) {
            return response;
         },
         function (error) {
            if (401 === error.response.status) {
               setUser(null);
            } else {
               return Promise.reject(error);
            }
         }
      );
   }, []);

   return (
      <AuthContext.Provider
         value={{
            signInUrl,
            signInUrlDev,
            user,
            signOut,
            isLoading,
            handleLoginWithGoogle,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
}
