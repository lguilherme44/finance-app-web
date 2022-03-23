import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { LoginBoxComponent } from '../components/LoginBox';
import { Layout } from '../components/Layout';
import { RegisterComponent } from '../components/Register';

const RoutesFunction = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<LoginBoxComponent />} />
            <Route path="/" element={<LoginBoxComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route
               path="/dashboard"
               element={
                  <PrivateRoute>
                     <Layout />
                  </PrivateRoute>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutesFunction;
