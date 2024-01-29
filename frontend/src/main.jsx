import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ParentProvider } from "./contexts/ParentContext";
import { ChildContextProvider } from "./contexts/ChildContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParentProvider>
      <ChildContextProvider>
        <App />
      </ChildContextProvider>
    </ParentProvider>
  </React.StrictMode>
);
