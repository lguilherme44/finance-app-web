import { Formik } from 'formik';
import { useContext, useEffect } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { AuthContext } from '../../contexts/auth';
import {
   logInWithEmailAndPassword,
   signInWithGoogle,
} from '../../config/firebase-config';
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
import Spinner from '../Spinner';

export default function LoginBoxComponent() {
   const navigate = useNavigate();
   const { signIn, isLoading, isLogged } = useContext(AuthContext);

   useEffect(() => {
      if (isLogged) {
         navigate('/dashboard');
      }
   }, [isLogged]);

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

   return isLoading ? (
      <Spinner />
   ) : (
      <>
         <LoginBoxWrapper>
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
                  validate={(values) => {}}
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

                        {isLoading ? (
                           <Spinner />
                        ) : (
                           <>
                              <button
                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded space-x-1"
                                 type="submit"
                              >
                                 Entrar
                              </button>

                              <button
                                 className="text-base ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                 type="button"
                                 onClick={() => navigate('register')}
                              >
                                 Registrar novo usuário
                              </button>
                           </>
                        )}
                     </FormStyled>
                  )}
               </Formik>

               <BoxLogin>
                  <LoginButton
                     className="text-base"
                     onClick={handleLoginWithGoogle}
                     type="google"
                  >
                     <AiFillGoogleCircle size={30} />
                     Entrar com Google
                  </LoginButton>
               </BoxLogin>
            </WrapperContent>
         </LoginBoxWrapper>
      </>
   );
}
