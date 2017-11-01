import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const Spinner = styled.div`
  display: inline-block;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 500ms linear infinite;
`;
export const App = styled.div`

`;

export const AppHeader = styled.header`
  background-color: #222;
  padding: 10px;
  text-align: center;
  color: white;
`;

export const AppTitle = styled.h1`
  font-size: 1.5em;
`;
