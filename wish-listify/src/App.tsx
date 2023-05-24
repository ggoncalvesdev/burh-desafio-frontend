import { BrowserRouter, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./components/Header";
import { Router } from "./routes";

function App() {
  const location = useLocation();
  // shouldShowHeader é para renderizar Header em todas as url menos "/"
  const shouldShowHeader = location.pathname !== "/";

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {shouldShowHeader && <Header />}
      <Router />
    </ThemeProvider>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}