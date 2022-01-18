import styled from 'styled-components';

export const Form = styled.form`
   h2 {
      color: ${(props) => props.theme.colors.text};
      font-size: 1.5rem;
      margin-bottom: 2rem;
   }

   input {
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
   }

   button[type='submit'] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: ${(props) => props.theme.colors.secondary};
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 600;

      transition: filter 0.2;

      &:hover {
         filter: brightness(0.9);
      }
   }
`;
