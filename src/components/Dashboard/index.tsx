import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container, Footer } from './styles';
import { shade } from 'polished';
import ThemeCustomDefault from '../../styles/themes/context';
import Switch from 'react-switch';

export function Dashboard() {
   const { title } = useContext(ThemeContext);
   const { toggleTheme } = useContext(ThemeCustomDefault);

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

export default Dashboard;
