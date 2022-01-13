import { ReactNode } from 'react';
import { Select } from './styles';

interface ISelectCustomProps {
   children: ReactNode;
}

export function SelectCustom({ children }: ISelectCustomProps) {
   return <Select>{children}</Select>;
}
