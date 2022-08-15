import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { store } from "./redux/store";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <AppRoutes />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
