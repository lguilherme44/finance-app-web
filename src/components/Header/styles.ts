import styled from 'styled-components';

export const Container = styled.header`
   background: ${(props) => props.theme.colors.backgroundHeader};
`;

export const ButtonLogout = styled.button`
   background: transparent;
   border: 0;
   color: ${({ theme }) => theme.colors.textHeaderTable};
   left: 24px;
   top: 24px;
   margin-left: 1rem;

   cursor: pointer;

   grid-area: 1 / 5 / 2 / 6;

   &:hover {
      filter: brightness(0.9);
   }

   @media (max-width: 768px) {
      margin-left: auto;
   }
`;

export const ButtonNewTransaction = styled.button`
   font-size: 1rem;
   color: ${(props) => props.theme.colors.textHeaderTable};
   background: ${(props) => props.theme.colors.primary};
   border: 0;
   padding: 0 2rem;
   border-radius: 0.25rem;
   height: 3rem;

   transition: filter 0.2s;

   grid-area: 1 / 2 / 2 / 3;

   &:hover {
      filter: brightness(0.9);
   }
`;

export const Content = styled.div`
   max-width: 1120px;
   margin: 0 auto;

   padding: 2rem 1rem 8rem;
   width: 100%;

   display: grid;
   grid-template-columns: 3fr 1fr;
   grid-column-gap: 0px;
   grid-row-gap: 0px;

   align-items: center;

   @media (max-width: 768px) {
      display: flex;
      margin-bottom: 0.5rem;

      img {
         display: none;
      }
   }
`;

export const LogoStyled = styled.img`
   grid-area: 1 / 1 / 2 / 2;
`;
