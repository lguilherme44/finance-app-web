import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../config/firebase-config';
import { AuthContext } from '../contexts/auth';

export function PrivateRoute({ children }: { children: JSX.Element }) {
   const location = useLocation();
   const [user] = useAuthState(auth);

   if (!user) {
      return <Navigate to="/" replace state={{ from: location }} />;
   }
   return children;
}
