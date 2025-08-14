import { ProviderWrapper as ThemeProvider } from "/src/contexts/themeContext";
import { ProviderWrapper as OpinionsProvider } from "/src/contexts/opinionsContext";
import App from "./App";

const AppLoader = () => (
  <ThemeProvider>
    <OpinionsProvider>
      <App />
    </OpinionsProvider>
  </ThemeProvider>
);

export default AppLoader;
