import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { Dashboard } from '../components/Dashboard';
import { Header } from '../components/Header';
import { LoginBox } from '../components/LoginBox';

const RoutesFunction = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<LoginBox />} />
            <Route path="/" element={<LoginBox />} />
            <Route
               path="/dashboard"
               element={
                  <PrivateRoute>
                     <Dashboard />
                  </PrivateRoute>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutesFunction;
