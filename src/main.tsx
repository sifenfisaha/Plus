import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { AppProviders } from "./app/providers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>
);
