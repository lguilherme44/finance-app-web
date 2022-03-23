import styled from 'styled-components';

export const LoginBoxWrapper = styled.div`
   height: 100vh;
   width: 100%;
   background: linear-gradient(75deg, #17171a, #111314);
   text-align: center;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   strong {
      font-size: 32px;
      line-height: 36px;
   }
`;

export const WrapperContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;

   max-width: 520px;
   height: 500px;
   padding: 0 1rem;
`;

interface LoginButtonProps {
   type: string;
}

export const LoginButton = styled.a<LoginButtonProps>`
   background: ${({ type }) =>
      type === 'github' ? `var(--github-color)` : `var(--google-color)`};
   margin-top: 32px;
   padding: 0 40px;
   height: 45px;
   color: #f5f5f5;
   font-size: 0.8rem;
   font-weight: bold;
   text-transform: uppercase;
   text-decoration: none;
   border-radius: 0.5rem;
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: center;

   cursor: pointer;

   &:hover {
      filter: brightness(0.9);
   }

   svg {
      margin-right: 13px;
   }
`;

export const FormStyled = styled.form`
   background: #fff;
   backdrop-filter: blur(0.25rem);
   border-radius: 0.5rem;
   padding: 2rem;
   text-align: left;

   label {
      color: #444;
      font-size: 1rem;

      input {
         width: 100%;
         margin-bottom: 15px;
         margin-top: 10px;
         padding: 12px 16px;
         border-radius: 0.5rem;
         border: 1px solid #ddd;
         font-size: 0.875rem;
         color: #444;
         transition: border-color 0.2s;
         &:focus {
            border-color: #ccc;
         }
      }
   }
`;
