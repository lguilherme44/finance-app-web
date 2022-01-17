import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container, Footer } from './styles';
import { shade } from 'polished';
import { useDispatch } from 'react-redux';
import { getTransactionRequest } from '../../store/modules/transaction/get/actions';
import ThemeCustomDefault from '../../styles/themes/context';
import Switch from 'react-switch';

export function Dashboard() {
   const dispatch = useDispatch();
   const { title } = useContext(ThemeContext);
   const { toggleTheme } = useContext(ThemeCustomDefault);

   useEffect(() => {
      dispatch(getTransactionRequest());
   }, [dispatch]);

   return (
      <Container>
         <Summary />
         <TransactionsTable />

         <Footer>
            <label>Alterar modo de cores?</label>
            <Switch
               onChange={toggleTheme}
               checked={title === 'dark'}
               checkedIcon={false}
               uncheckedIcon={false}
               height={15}
               width={40}
               handleDiameter={20}
               offColor={shade(0.5, '#212121')}
               onColor={shade(0.5, '#fff')}
            />
         </Footer>
      </Container>
   );
}