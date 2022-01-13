import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type User = {
   id: string;
   name: string;
   login: string;
   avatar_url: string;
};

type AuthContextData = {
   user: User | null;
   signInUrl: string;
   signOut: () => void;
   isLoading: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProver = {
   children: ReactNode;
};

type AuthResponse = {
   token: string;
   user: {
      id: string;
      avatar_url: string;
      name: string;
      login: string;
   };
};

export function AuthProvider({ children }: AuthProver) {
   const [user, setUser] = useState<User | null>(null);
   const [isLoading, setIsLoading] = useState(false);

   const signInUrl = `${process.env.REACT_APP_SIGNIN_URL}${process.env.REACT_APP_CLIENT_ID}`;

   async function signIn(githubCode: string) {
      setIsLoading(true);
      const response = await api.post<AuthResponse>('authenticate', {
         code: githubCode,
      });

      const { token, user } = response.data;

      localStorage.setItem('@dowhile:token', token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(user);
      setIsLoading(false);
   }

   function signOut() {
      setUser(null);
      localStorage.removeItem('@dowhile:token');
   }

   useEffect(() => {
      const token = localStorage.getItem('@dowhile:token');

      if (token) {
         api.defaults.headers.common.authorization = `Bearer ${token}`;
         api.get<User>('profile').then((response) => {
            setUser(response.data);
         });
      }
   }, []);

   useEffect(() => {
      const url = window.location.href;
      const hasGithubCode = url.includes('?code=');

      if (hasGithubCode) {
         const [urlWihoutCode, githubCode] = url.split('?code=');

         window.history.pushState({}, '', urlWihoutCode);

         signIn(githubCode);
      }
   }, []);

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
      <AuthContext.Provider value={{ signInUrl, user, signOut, isLoading }}>
         {children}
      </AuthContext.Provider>
   );
}
