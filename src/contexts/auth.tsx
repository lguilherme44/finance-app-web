import { signOut } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase-config';
import { api } from '../services/api';
import usePersistentState from '../util/usePersistentState';

type User = {
   id: string;
   name: string;
   login: string;
   avatar_url: string;
   email: string;
};

type AuthContextData = {
   user: User;
   logout: () => void;
   signIn: (name: string | undefined, email: string, avatar: string) => void;
   loading: boolean;
   isLoading: boolean;
   isLogged: boolean;
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
      email: string;
   };
};

export function AuthProvider({ children }: AuthProver) {
   const [user, setUser] = useState<User>({} as User);
   const [isLoading, setIsLoading] = useState(false);
   const [isLogged, setIsLogged] = usePersistentState(
      '@appFinance:isLogged',
      false
   );
   const [, loading] = useAuthState(auth);

   async function signIn(
      name: string | undefined = '',
      email: string,
      avatar: string | undefined = ''
   ) {
      try {
         setIsLoading(true);
         const response = await api.post<AuthResponse>('user/create', {
            name,
            email,
            avatar,
         });

         const { token, userExist } = response.data;

         if (token) {
            setIsLoading(false);

            setUser(userExist);

            setIsLogged(true);

            localStorage.setItem('@appFinance:token', token);

            api.defaults.headers.common.authorization = `Bearer ${token}`;
         }
         setIsLoading(false);

         return userExist;
      } catch (error) {
         setIsLoading(false);
         console.log(error);
      }
   }

   function logout() {
      localStorage.removeItem('@appFinance:token');
      localStorage.removeItem('@appFinance:theme');
      setIsLogged(false);
      signOut(auth);
   }

   useEffect(() => {
      const token = localStorage.getItem('@appFinance:token');

      if (token) {
         console.log('entrou');
         setIsLogged(true);
         api.defaults.headers.common.authorization = `Bearer ${token}`;
      }
   }, [user]);

   useEffect(() => {
      api.interceptors.response.use(
         function (response) {
            return response;
         },
         function (error) {
            if (error.response.status === 401) {
               alert('Token expirado');
               return Promise.reject(error);
            }
         }
      );
   }, []);

   return (
      <AuthContext.Provider
         value={{ user, logout, signIn, loading, isLoading, isLogged }}
      >
         {children}
      </AuthContext.Provider>
   );
}
