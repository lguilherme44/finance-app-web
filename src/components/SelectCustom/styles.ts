import styled from 'styled-components';

export const Select = styled.select`
   width: 100%;
   padding: 0 1.5rem;
   height: 4rem;
   border-radius: 0.25rem;

   border: 1px solid #d7d7d7;
   background: #e7e9ee;
   color: ${(props) => props.theme.colors.textDefault};

   font-weight: 400;
   font-size: 1rem;

   &::placeholder {
      color: ${(props) => props.theme.colors.textDefault};
   }

   & {
      margin-top: 1rem;
   }
`;
