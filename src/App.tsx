import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import AppRoutes from "./routes";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
