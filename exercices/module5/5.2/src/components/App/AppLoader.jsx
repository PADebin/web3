import { ProviderWrapper } from "/src/contexts/opinionsContext";
import App from "./App";

const AppLoader = () => (
  <ProviderWrapper>
    <App />
  </ProviderWrapper>
);

export default AppLoader;
