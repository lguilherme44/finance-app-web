import { Formik } from 'formik';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { logInWithEmailAndPassword } from '../../config/firebase-config';
import Spinner from '../Spinner';
import { LoginBoxWrapper, WrapperContent, FormStyled } from './styles';
import { useNavigate } from 'react-router-dom';

export default function RegisterComponent() {
   const navigate = useNavigate();
   const { signIn } = useContext(AuthContext);
   const { loading } = useContext(AuthContext);

   return (
      <LoginBoxWrapper>
         {loading ? (
            <Spinner />
         ) : (
            <WrapperContent>
               <Formik
                  initialValues={{ email: '', password: '' }}
                  validate={() => {}}
                  onSubmit={async (values) => {
                     const login = await logInWithEmailAndPassword(
                        values.email,
                        values.password,
                        'register'
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
                     isSubmitting,
                     /* and other goodies */
                  }) => (
                     <FormStyled onSubmit={handleSubmit} autoComplete="off">
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
                           className="border-2 border-gray-100 rounded py-1 px-4"
                           type="button"
                           disabled={isSubmitting}
                           onClick={() => {
                              navigate('/');
                           }}
                        >
                           Voltar
                        </button>

                        <button
                           className="border-2 border-gray-100 rounded py-1 px-4"
                           type="submit"
                           disabled={isSubmitting}
                        >
                           Cadastrar
                        </button>
                     </FormStyled>
                  )}
               </Formik>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     gap: '1rem',
                  }}
               ></div>
            </WrapperContent>
         )}
      </LoginBoxWrapper>
   );
}
