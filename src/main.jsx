import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.jsx";
import "./pages/App/App.css";
import { BrowserRouter } from "react-router-dom";

localStorage.debug = "mern:*";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
