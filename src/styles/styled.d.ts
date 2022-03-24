import 'styled-components';
declare module 'styled-components' {
   export interface DefaultTheme {
      title: string;

      colors: {
         primary: string;
         alternative: string;
         secondary: string;
         textSecondary: string;
         third: string;
         textDefault: string;
         textLight: string;
         text: string;
         textHeaderTable: string;
         borderTable: string;
         background: string;
         backgroundHeader: string;
      };
   }
}
