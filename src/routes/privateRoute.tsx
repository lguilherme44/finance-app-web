import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { auth } from '../config/firebase-config';
import { AuthContext } from '../contexts/auth';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);

   if (loading) {
      return <Spinner />;
   }

   console.log(user);
   if (!user) {
      return <Navigate to="/" replace state={{ from: location }} />;
   }
   return children;
}
