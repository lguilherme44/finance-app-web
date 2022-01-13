import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

import ThemeContext from './styles/themes/context';
import usePersistedState from './util/usePersistentState';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { useContext } from 'react';

/* tailwindcss */
import './styles/tailwind.css';
import { AuthContext } from './contexts/auth';
import { LoginBox } from './components/LoginBox';

/** redux */
import { Provider } from 'react-redux';
import store from './store';

Modal.setAppElement('#root');

export function App() {
   const { user } = useContext(AuthContext);
   const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

   function toggleTheme() {
      setTheme(theme.title === 'light' ? dark : light);
   }

   return (
      <Provider store={store}>
         <ThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>
               {!!user ? (
                  <>
                     <Header />
                     <Dashboard />
                  </>
               ) : (
                  <LoginBox />
               )}

               <GlobalStyle />
            </ThemeProvider>
         </ThemeContext.Provider>
      </Provider>
   );
}
