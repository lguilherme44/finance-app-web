import axios from 'axios';

console.log(process.env.REACT_APP_ENV);

export const api = axios.create({
   baseURL:
      process.env.REACT_APP_ENV === 'dev'
         ? 'http://localhost:4000'
         : process.env.REACT_APP_BASE_URL_API,
});
