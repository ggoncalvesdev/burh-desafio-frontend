import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";

import { ContentContainer} from "./styles";

export const Home = () => {
  return(
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <ContentContainer>
    </ContentContainer>
    </ThemeProvider>
  )
}