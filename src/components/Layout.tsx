import { lazy, Suspense } from 'react';
import Spinner from './Spinner';
const Header = lazy(() => import('./Header'));
const Dashboard = lazy(() => import('./Dashboard'));

export default function Layout() {
   return (
      <>
         <Suspense
            fallback={
               <>
                  <Spinner />
               </>
            }
         >
            <Header />
            <Dashboard />
         </Suspense>
      </>
   );
}
