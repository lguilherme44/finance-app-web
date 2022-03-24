import { shade } from 'polished';

// eslint-disable-next-line
export default {
   title: 'dark',

   colors: {
      primary: '#141414',
      alternative: '#6933ff',
      secondary: '#399a51',
      textSecondary: '#63c736',
      third: '#e52e4d',
      textDefault: '#4e4e4e',
      textLight: '#e3e3e3',
      background: '#d4d4d4',
      backgroundHeader: '#1f1f1f',
      text: shade(0.2, '#444444'),
      textHeaderTable: '#f5f5f5',
      borderTable: shade(0.7, '#000'),
   },
};
