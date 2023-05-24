import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
:focus{
    outline: 0;
}
body{
  -webkit-font-smoothing: antialiased;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-800"]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["gray-900"]};
    border-radius: 100px;
  }
    
}
body, input, textarea, button{
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

button{
  cursor: pointer;
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}
`;
