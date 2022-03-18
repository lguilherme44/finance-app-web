import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import RoutesFunction from './routes';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import ThemeContext from './styles/themes/context';
import usePersistedState from './util/usePersistentState';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { useContext } from 'react';

/* tailwindcss */
import './styles/tailwind.css';
import { AuthContext } from './contexts/auth';

/** redux */
import { Provider } from 'react-redux';
import store from './store';

Modal.setAppElement('#root');

export function App() {
   const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

   function toggleTheme() {
      setTheme(theme.title === 'light' ? dark : light);
   }

   return (
      <Provider store={store}>
         <ThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>
               <ToastContainer />
               <RoutesFunction />
               <GlobalStyle />
            </ThemeProvider>
         </ThemeContext.Provider>
      </Provider>
   );
}
