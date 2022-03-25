import { memo, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container, Footer } from './styles';
import { shade } from 'polished';
import { useDispatch } from 'react-redux';
import { getTransactionRequest } from '../../store/modules/transaction/get/actions';
import { getSummaryIncomeRequest } from '../../store/modules/summary/income/actions';
import { getSummaryExpenseRequest } from '../../store/modules/summary/expense/actions';
import ThemeCustomDefault from '../../styles/themes/context';
import Switch from 'react-switch';
import { AuthContext } from '../../contexts/auth';

export function Dashboard() {
   const dispatch = useDispatch();
   const { user } = useContext(AuthContext);
   const { title } = useContext(ThemeContext);
   const { toggleTheme } = useContext(ThemeCustomDefault);

   useEffect(() => {
      dispatch(getTransactionRequest());
      dispatch(getSummaryIncomeRequest());
      dispatch(getSummaryExpenseRequest());
   }, [dispatch, user]);

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

export default memo(Dashboard);
