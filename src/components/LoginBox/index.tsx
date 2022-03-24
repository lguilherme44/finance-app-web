import { Formik } from 'formik';
import { useContext } from 'react';
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

export function LoginBoxComponent() {
   const navigate = useNavigate();
   const { loading, signIn } = useContext(AuthContext);

   const handleLoginWithGoogle = async () => {
      const login = await signInWithGoogle();
      if (login?.email) {
         signIn(login.displayName || '', login.email, login.photoURL || '');
         navigate('dashboard');
      }
   };

   return (
      <LoginBoxWrapper>
         {loading ? (
            <Spinner />
         ) : (
            <WrapperContent>
               {/* <img
                  src={Logo}
                  alt="Finance App"
                  className="object-cover h-20 w-10"
               /> */}
               <img
                  style={{
                     width: '350px',
                     height: 'auto',

                     borderTopLeftRadius: '1rem',
                     borderTopRightRadius: '1rem',
                     // paddingBottom: '1.2rem',
                     marginLeft: 'auto',
                     marginRight: 'auto',
                  }}
                  src={Logo}
                  alt="Finance App"
               />
               <Formik
                  initialValues={{ email: '', password: '' }}
                  validate={(values) => {
                     const errors = {} as any;
                     if (!values.email) {
                        errors.email = 'Required';
                     } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                           values.email
                        )
                     ) {
                        errors.email = 'E-mail inválido.';
                     }
                     return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                     logInWithEmailAndPassword(values.email, values.password);
                  }}
               >
                  {({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                     /* and other goodies */
                  }) => (
                     <FormStyled onSubmit={handleSubmit}>
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
                        {/* <button
                           className="border-2 border-gray-100 rounded py-1 px-3"
                           type="submit"
                           disabled={isSubmitting}
                        >
                           Entrar
                        </button> */}

                        <button
                           className="border-2 border-gray-100 rounded py-1 px-3"
                           type="button"
                           disabled
                           onClick={() => navigate('register')}
                        >
                           Registrar novo usuário (em breve)
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
