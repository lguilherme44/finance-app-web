import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import Spinner from '../Spinner';
import { LoginBoxWrapper, SiginWithGithub } from './styles';

export function LoginBox() {
   const { signInUrl, isLoading } = useContext(AuthContext);

   return (
      <LoginBoxWrapper>
         {isLoading ? (
            <Spinner />
         ) : (
            <SiginWithGithub href={signInUrl}>
               <VscGithubInverted size={24} />
               Entrar com github
            </SiginWithGithub>
         )}
      </LoginBoxWrapper>
   );
}
