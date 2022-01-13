import styled from 'styled-components';

export const Container = styled.header`
   background: ${(props) => props.theme.colors.background};
`;

export const ButtonLogout = styled.button`
   background: transparent;
   border: 0;
   color: ${({ theme }) => theme.colors.text};
   left: 24px;
   top: 24px;

   cursor: pointer;

   &:hover {
      filter: brightness(0.9);
   }
`;

export const ButtonNewTransaction = styled.button`
   font-size: 1rem;
   color: ${(props) => props.theme.colors.textDefault};
   background: ${(props) => props.theme.colors.primary};
   border: 0;
   padding: 0 2rem;
   border-radius: 0.25rem;
   height: 3rem;

   transition: filter 0.2s;

   &:hover {
      filter: brightness(0.9);
   }
`;

export const Content = styled.div`
   max-width: 1120px;
   margin: 0 auto;

   padding: 2rem 1rem 12rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
