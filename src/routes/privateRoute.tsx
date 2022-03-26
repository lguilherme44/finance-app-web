import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { auth } from '../config/firebase-config';
import { AuthContext } from '../contexts/auth';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
   const location = useLocation();
   const { isLogged } = useContext(AuthContext);
   const [user, loading] = useAuthState(auth);

   if (loading) {
      return <Spinner />;
   }

   if (!isLogged) {
      return <Navigate to="/" replace state={{ from: location }} />;
   }
   return children;
}
