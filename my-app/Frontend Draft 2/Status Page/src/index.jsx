import "../global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StatusPage } from "./screens/StatusPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <StatusPage />
  </StrictMode>,
);
