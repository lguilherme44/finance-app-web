import { signOut } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase-config';
import { api } from '../services/api';

type User = {
   id: string;
   name: string;
   login: string;
   avatar_url: string;
};

type AuthContextData = {
   user: User | null;
   logout: () => void;
   signIn: (name: string | undefined, email: string, avatar: string) => void;
   loading: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProver = {
   children: ReactNode;
};

type AuthResponse = {
   token: string;
   userExist: {
      id: string;
      avatar_url: string;
      name: string;
      login: string;
   };
};

export function AuthProvider({ children }: AuthProver) {
   const [user, setUser] = useState<User | null>(null);
   const [, loading] = useAuthState(auth);

   async function signIn(
      name: string | undefined = '',
      email: string,
      avatar: string | undefined = ''
   ) {
      const response = await api.post<AuthResponse>('user/create', {
         name,
         email,
         avatar,
      });

      const { token, userExist } = response.data;

      setUser(userExist);

      localStorage.setItem('@appFinance:token', token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;
   }

   function logout() {
      signOut(auth);
   }

   useEffect(() => {
      const token = localStorage.getItem('@appFinance:token');

      if (token) {
         api.defaults.headers.common.authorization = `Bearer ${token}`;
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
      <AuthContext.Provider value={{ user, logout, signIn, loading }}>
         {children}
      </AuthContext.Provider>
   );
}
