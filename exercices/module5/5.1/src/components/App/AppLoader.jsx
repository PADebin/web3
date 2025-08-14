import { ProviderWrapper } from "/src/contexts/countersContext";
import App from "./App";

const AppLoader = () => {
  return (
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  );
};

export default AppLoader;
