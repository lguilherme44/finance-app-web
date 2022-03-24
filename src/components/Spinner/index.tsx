import { TailSpin } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

const Spinner: React.FC = () => {
   const theme = useTheme();
   return <TailSpin color={theme.colors.secondary} height={55} width={55} />;
};

export default Spinner;
