import styled from 'styled-components';


export const Pulsante = styled.section`
   @keyframes pulse {
      0% {
         box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
      }
      50% {
         box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
      }
      100% {
         box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
      }
   }

   animation: pulse 2s infinite;
`;
