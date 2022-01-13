import { createContext } from 'react';

interface ThemeCustomDefault {
   toggleTheme: () => void;
}

export default createContext<ThemeCustomDefault>({
   toggleTheme: () => {},
});
