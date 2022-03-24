import styled from 'styled-components';

export const LoginBoxWrapper = styled.div`
   height: 100vh;
   width: 100%;
   background: #fff;
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

export const BoxLogin = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   gap: 1rem;
   padding: 0 2rem;
`;

interface LoginButtonProps {
   type: string;
}

export const LoginButton = styled.a<LoginButtonProps>`
   color: #f5f5f5;
   font-weight: bold;
   text-transform: uppercase;
   text-decoration: none;
   width: 100%;
   padding: 0 1.2rem;
   height: 3rem;
   background: ${(props) => props.theme.colors.secondary};
   border-radius: 0.25rem;
   border: 0;
   font-size: 1rem;

   font-weight: 600;
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

   transition: filter 0.2;
`;

export const FormStyled = styled.form`
   background: #fff;
   backdrop-filter: blur(0.25rem);
   padding: 2rem;
   text-align: left;
   border-top-right-radius: 0;
   border-top-left-radius: 0;

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
