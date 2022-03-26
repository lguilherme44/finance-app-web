import { Formik } from 'formik';
import { useContext, useEffect } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { AuthContext } from '../../contexts/auth';
import {
   logInWithEmailAndPassword,
   signInWithGoogle,
} from '../../config/firebase-config';
import Spinner from '../Spinner';
import {
   LoginBoxWrapper,
   LoginButton,
   WrapperContent,
   FormStyled,
   BoxLogin,
} from './styles';
import Logo from '../../assets/logo-3.png';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export default function LoginBoxComponent() {
   const navigate = useNavigate();
   const { loading, signIn } = useContext(AuthContext);

   const handleLoginWithGoogle = async () => {
      const login = await signInWithGoogle();
      if (login?.email) {
         signIn(login.displayName || '', login.email, login.photoURL || '');
         navigate('dashboard');
      }
   };

   // acorda heroku, preguiçoso
   async function wakeHeroku() {
      await api.get('/');
   }

   useEffect(() => {
      wakeHeroku();
   }, []);

   return (
      <LoginBoxWrapper>
         {loading ? (
            <Spinner />
         ) : (
            <WrapperContent>
               <div className="ax-w-md mx-auto">
                  <img
                     className="h-48 w-full object-cover md:h-full md:w-48"
                     src={Logo}
                     alt="Finance App"
                  />
               </div>
               <Formik
                  initialValues={{ email: '', password: '' }}
                  validate={(values) => {
                     // const errors = {} as any;
                     // if (!values.email) {
                     //    errors.email = 'Required';
                     // } else if (
                     //    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                     //       values.email
                     //    )
                     // ) {
                     //    errors.email = 'E-mail inválido.';
                     // }
                     // return errors;
                  }}
                  onSubmit={async (values) => {
                     const login = await logInWithEmailAndPassword(
                        values.email,
                        values.password,
                        'login'
                     );

                     if (login?.email) {
                        signIn(
                           login.displayName || '',
                           login.email,
                           login.photoURL || ''
                        );
                        navigate('/dashboard');
                     }
                  }}
               >
                  {({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     /* and other goodies */
                  }) => (
                     <FormStyled autoComplete="off" onSubmit={handleSubmit}>
                        <label htmlFor="input-email">
                           E-mail
                           <input
                              id="input-email"
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                           />
                        </label>
                        {errors.email && touched.email && errors.email}

                        <label htmlFor="input-password">
                           Password
                           <input
                              id="input-password"
                              type="password"
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                           />
                           {errors.password &&
                              touched.password &&
                              errors.password}
                        </label>
                        <button
                           className="border-2 border-gray-100 rounded py-1 px-3"
                           type="submit"
                        >
                           Entrar
                        </button>

                        <button
                           className="border-2 border-gray-100 rounded py-1 px-3"
                           type="button"
                           onClick={() => navigate('register')}
                        >
                           Registrar novo usuário
                        </button>
                     </FormStyled>
                  )}
               </Formik>
               <BoxLogin>
                  <LoginButton onClick={handleLoginWithGoogle} type="google">
                     <AiFillGoogleCircle size={30} />
                     Entrar com Google
                  </LoginButton>
               </BoxLogin>
            </WrapperContent>
         )}
      </LoginBoxWrapper>
   );
}
