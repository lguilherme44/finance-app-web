import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from '../components/Spinner';

const PrivateRoute = lazy(() => import('./privateRoute'));
const LoginBoxComponent = lazy(() => import('../components/LoginBox'));
const RegisterComponent = lazy(() => import('../components/Register'));
const Layout = lazy(() => import('../components/Layout'));

const RoutesFunction = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               index
               element={
                  <Suspense
                     fallback={
                        <>
                           <Spinner />
                        </>
                     }
                  >
                     <LoginBoxComponent />
                  </Suspense>
               }
            />
            <Route
               path="/"
               element={
                  <Suspense
                     fallback={
                        <>
                           <Spinner />
                        </>
                     }
                  >
                     <LoginBoxComponent />
                  </Suspense>
               }
            />
            <Route
               path="/register"
               element={
                  <Suspense
                     fallback={
                        <>
                           <Spinner />
                        </>
                     }
                  >
                     <RegisterComponent />
                  </Suspense>
               }
            />
            <Route
               path="/dashboard"
               element={
                  <Suspense
                     fallback={
                        <>
                           <Spinner />
                        </>
                     }
                  >
                     <PrivateRoute>
                        <Layout />
                     </PrivateRoute>
                  </Suspense>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutesFunction;
