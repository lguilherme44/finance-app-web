import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
   margin-top: 4rem;
   overflow-x: auto;
   display: grid;
   grid-template-rows: 1fr auto;
   font-size: 1.12rem;

   table,
   td,
   th {
      border: 1px solid ${(props) => props.theme.colors.borderTable};

      &.income {
         border: 1px solid ${(props) => props.theme.colors.borderTable};
      }

      &.expense {
         border: 1px solid ${(props) => props.theme.colors.borderTable};
      }
   }

   table {
      width: 100%;
      border-spacing: 0, 0.5rem;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 0.25rem;
      text-align: left;
      display: table;
      border-collapse: collapse;
      overflow: hidden;

      th {
         color: ${(props) => props.theme.colors.textHeaderTable};
         font-weight: 400;
         padding: 1rem 2rem;
         text-align: left;
         line-height: 1.5rem;
      }

      td {
         padding: 0 2rem;
         color: ${(props) => props.theme.colors.textHeaderTable};
         text-align: inherit;
         display: table-cell;

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

   @media (max-width: 768px) {
   }
`;

export const ButtonCustom = styled.button`
   svg {
      color: ${(props) => props.color};
   }
`;
