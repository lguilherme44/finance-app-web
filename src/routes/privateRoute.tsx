import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export function PrivateRoute({ children }: { children: JSX.Element }) {
   const location = useLocation();
   const { user } = useContext(AuthContext);

   if (!user) {
      return <Navigate to="/" replace state={{ from: location }} />;
   }
   return children;
}
