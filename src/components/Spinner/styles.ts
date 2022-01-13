import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
   border: 10px solid var(--shape);
   border-top: 10px solid var(--green);
   border-radius: 50%;
   width: 80px;
   height: 80px;
   animation: spin 1s linear infinite;

   @keyframes spin {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;
