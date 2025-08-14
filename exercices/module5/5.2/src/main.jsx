import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLoader from "components/App/AppLoader";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppLoader />
  </StrictMode>
);
