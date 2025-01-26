import "../global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TrackerPage } from "./screens/TrackerPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <TrackerPage />
  </StrictMode>,
);
