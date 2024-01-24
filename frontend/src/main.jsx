import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ParentProvider } from "./contexts/ParentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParentProvider>
      <App />
    </ParentProvider>
  </React.StrictMode>
);
