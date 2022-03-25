import { useContext, useState } from 'react';
import {
   Container,
   Content,
   ButtonLogout,
   ButtonNewTransaction,
   LogoStyled,
} from './styles';
import Logo from '../../assets/logo-invertido.png';
import { VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import { ModalCustom } from '../ModalCustom';
import { TransactionForm } from '../TransactionForm';
import { useDispatch } from 'react-redux';

export function Header() {
   const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] =
      useState(false);

   function handleOpenNewTransactionModal() {
      SetIsNewTransactionModalOpen(true);
   }

   function handleCloseNewTransactionModal() {
      SetIsNewTransactionModalOpen(false);
   }

   const { logout } = useContext(AuthContext);

   return (
      <Container>
         <Content>
            <LogoStyled width={200} src={Logo} alt="Finance Control" />
            <ButtonNewTransaction
               type="button"
               onClick={handleOpenNewTransactionModal}
            >
               Nova transação
            </ButtonNewTransaction>

            <ButtonLogout type="button">
               <VscSignOut size={32} onClick={logout} />
            </ButtonLogout>

            <ModalCustom
               isOpen={isNewTransactionModalOpen}
               onRequestClose={handleCloseNewTransactionModal}
            >
               <TransactionForm onCloseModal={handleCloseNewTransactionModal} />
            </ModalCustom>
         </Content>
      </Container>
   );
}
