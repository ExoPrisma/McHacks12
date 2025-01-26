import "../global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StatusPageConsent } from "./screens/StatusPageConsent";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <StatusPageConsent />
  </StrictMode>,
);
