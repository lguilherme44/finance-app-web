import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import Spinner from '../Spinner';
import { LoginBoxWrapper, SiginWithGithub, SiginWithGoogle } from './styles';

export function LoginBox() {
   const { signInUrl, signInUrlDev, isLoading, handleLoginWithGoogle } =
      useContext(AuthContext);

   const urlToLogin =
      process.env.REACT_APP_ENV === 'dev' ? signInUrlDev : signInUrl;

   return (
      <LoginBoxWrapper>
         {isLoading ? (
            <Spinner />
         ) : (
            <>
               {/* <SiginWithGithub href={urlToLogin}>
                  <VscGithubInverted size={24} />
                  Entrar com github
               </SiginWithGithub> */}

               <SiginWithGoogle onClick={handleLoginWithGoogle}>
                  <VscGithubInverted size={24} />
                  Entrar com google
               </SiginWithGoogle>
            </>
         )}
      </LoginBoxWrapper>
   );
}
