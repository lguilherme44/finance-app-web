import styled from 'styled-components';

export const Container = styled.main`
   max-width: 1120px;
   margin: 0 auto;
   padding: 2.5rem 1rem;
`;

export const Footer = styled.div`
   max-width: 1120px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   /* position: absolute; */
   padding: 15px 0;
   bottom: 0;

   label {
      color: ${({ theme }) => theme.colors.text};
      padding-right: 5px;
   }
`;
