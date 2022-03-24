import { Formik } from 'formik';
import { useContext } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { AuthContext } from '../../contexts/auth';
import { logInWithEmailAndPassword } from '../../config/firebase-config';
// import * as Yup from 'yup';
import Spinner from '../Spinner';
import {
   LoginBoxWrapper,
   LoginButton,
   WrapperContent,
   FormStyled,
} from './styles';
import { useNavigate } from 'react-router-dom';

export function RegisterComponent() {
   const navigate = useNavigate();
   const { loading } = useContext(AuthContext);

   return (
      <LoginBoxWrapper>
         {loading ? (
            <Spinner />
         ) : (
            <WrapperContent>
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
                  onSubmit={(values) => {
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
