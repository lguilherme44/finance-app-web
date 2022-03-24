import { TailSpin } from 'react-loader-spinner';
import { useTheme } from 'styled-components';
import { BoxSpinner } from './styles';

const Spinner: React.FC = () => {
   const theme = useTheme();
   return (
      <BoxSpinner>
         <TailSpin color={theme.colors.secondary} height={55} width={55} />
      </BoxSpinner>
   );
};

export default Spinner;
