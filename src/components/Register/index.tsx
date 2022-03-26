import { Formik } from 'formik';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { logInWithEmailAndPassword } from '../../config/firebase-config';
import Logo from '../../assets/logo-3.png';
import { LoginBoxWrapper, WrapperContent, FormStyled } from './styles';
import { useNavigate } from 'react-router-dom';

export default function RegisterComponent() {
   const navigate = useNavigate();
   const { signIn } = useContext(AuthContext);

   return (
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
                        {errors.password && touched.password && errors.password}
                     </label>

                     <button
                        className="border-2 border-gray-100 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded space-x-1"
                        type="button"
                        onClick={() => {
                           navigate('/');
                        }}
                     >
                        Voltar
                     </button>

                     <button
                        className=" bg-blue-600 ml-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded space-x-1"
                        type="submit"
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
      </LoginBoxWrapper>
   );
}
