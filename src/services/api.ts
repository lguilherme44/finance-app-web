import axios, { AxiosError, AxiosResponse } from 'axios';

export const api = axios.create({
   baseURL:
      process.env.REACT_APP_ENV === 'dev'
         ? 'http://localhost:4000'
         : process.env.REACT_APP_BASE_URL_API,
});

// api.interceptors.response.use(
//    (response) => {
//       return response;
//    },
//    async (err) => {
//       const { response } = err;

//       if (!response?.status) {
//          alert(
//             'Sem conexão com o servidor, verifique se você esta conectado a uma rede estavel.'
//          );
//          return Promise.reject(Error);
//       }

//       if (response?.status === 401) {
//          window.location.href = '/';
//          // alert('token expirado');
//          return Promise.reject(Error);
//       }
//       return Promise.reject(Error);
//    }
// );
