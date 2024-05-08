import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.jsx";
import "./pages/App/App.css";

localStorage.debug = "mern:*";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
