import styled, {  ThemeProvider } from "styled-components";

import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";

export const DefaultBody = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ContentContainer>{children}</ContentContainer>
    </ThemeProvider>
  );
};

const ContentContainer = styled.main`
  min-width: 100%;
  min-height: 100vh;
  padding-top: 4rem;
  background-color: ${(props) => props.theme['gray-800']};
`
