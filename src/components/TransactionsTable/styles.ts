import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
   margin-top: 4rem;
   overflow-x: auto;
   display: grid;
   grid-template-rows: 1fr auto;

   table {
      width: 100%;
      border-spacing: 0, 0.5rem;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 0.25rem;

      th {
         color: ${(props) => props.theme.colors.text};
         font-weight: 400;
         padding: 1rem 2rem;
         text-align: left;
         line-height: 1.5rem;
      }

      td {
         padding: 1rem 2rem;
         border: 0;
         color: ${(props) => props.theme.colors.textDefault};

         button {
            padding: 1rem;
         }

         &:first-child {
            color: var(--text-title);
         }

         &.income {
            color: ${(props) => props.theme.colors.secondary};
         }

         &.expense {
            color: var(--red);
         }
      }
   }
`;

export const ButtonCustom = styled.button`
   svg {
      color: ${(props) => props.color};
   }
`;
