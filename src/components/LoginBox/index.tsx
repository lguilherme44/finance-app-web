import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import Spinner from '../Spinner';
import { LoginBoxWrapper, SiginWithGithub } from './styles';

export function LoginBox() {
   const { signInUrl, signInUrlDev, isLoading } = useContext(AuthContext);

   const urlToLogin =
      process.env.REACT_APP_ENV === 'dev' ? signInUrlDev : signInUrl;

   return (
      <LoginBoxWrapper>
         {isLoading ? (
            <Spinner />
         ) : (
            <SiginWithGithub href={urlToLogin}>
               <VscGithubInverted size={24} />
               Entrar com github
            </SiginWithGithub>
         )}
      </LoginBoxWrapper>
   );
}
