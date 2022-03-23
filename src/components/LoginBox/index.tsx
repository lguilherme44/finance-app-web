import { Formik } from 'formik';
import { useContext } from 'react';
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai';
import { AuthContext } from '../../contexts/auth';
// import * as Yup from 'yup';
import Spinner from '../Spinner';
import {
   LoginBoxWrapper,
   LoginButton,
   WrapperContent,
   FormStyled,
} from './styles';

export function LoginBoxComponent() {
   const { signInUrl, signInUrlDev, isLoading } = useContext(AuthContext);

   const urlToLogin =
      process.env.REACT_APP_ENV === 'dev' ? signInUrlDev : signInUrl;

   // const SignupSchema = Yup.object().shape({
   //    email: Yup.string()
   //       .min(2, 'Too Short!')
   //       .max(50, 'Too Long!')
   //       .required('Required'),
   //    password: Yup.string()
   //       .min(2, 'Too Short!')
   //       .max(50, 'Too Long!')
   //       .required('Required'),
   // });

   return (
      <LoginBoxWrapper>
         {isLoading ? (
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
                  onSubmit={(values, { setSubmitting }) => {
                     setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                     }, 400);
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
                           type="submit"
                           disabled={isSubmitting}
                        >
                           Entrar
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
               >
                  <LoginButton href={urlToLogin} type="github">
                     <AiFillGithub size={30} />
                     Entrar com github
                  </LoginButton>

                  <LoginButton href={urlToLogin} type="google">
                     <AiFillGoogleCircle size={30} />
                     Entrar com Google
                  </LoginButton>
               </div>
            </WrapperContent>
         )}
      </LoginBoxWrapper>
   );
}
