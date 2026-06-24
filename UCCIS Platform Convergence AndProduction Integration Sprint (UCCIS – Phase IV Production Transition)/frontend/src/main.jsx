import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RuntimeProvider } from "./context/RuntimeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RuntimeProvider>
          <App />
        </RuntimeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);