import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { auth } from '../config/firebase-config';

export function PrivateRoute({ children }: { children: JSX.Element }) {
   const location = useLocation();
   const [user, loading] = useAuthState(auth);

   if (loading) {
      return <Spinner />;
   }

   if (!user) {
      return <Navigate to="/" replace state={{ from: location }} />;
   }
   return children;
}
