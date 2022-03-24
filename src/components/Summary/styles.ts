import styled from 'styled-components';

export const Container = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 2rem;
   margin-top: -10rem;

   @media (max-width: 640px) {
      width: 100%;
      grid-template-columns: 1fr;
   }

   div {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.textDefault};
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
         0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
         0 22.3px 17.9px rgba(0, 0, 0, 0.042),
         0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);

      header {
         display: flex;
         align-items: center;
         justify-content: space-between;
         color: ${(props) => props.theme.colors.textDefault};
      }

      strong {
         display: block;
         margin-top: 1rem;
         font-size: 2rem;
         font-weight: 500;
         line-height: 3rem;
         color: ${(props) => props.theme.colors.textHeaderTable};
      }

      &.highlight-background {
         background: ${(props) => props.theme.colors.secondary};

         header {
            p {
               color: ${(props) => props.theme.colors.textLight};
            }
         }

         strong {
            color: ${(props) => props.theme.colors.textLight};
         }
      }

      &.warning-background {
         background: ${(props) => props.theme.colors.third};

         header {
            p {
               color: ${(props) => props.theme.colors.textLight};
            }
         }

         strong {
            color: ${(props) => props.theme.colors.textLight};
         }
      }
   }
`;
