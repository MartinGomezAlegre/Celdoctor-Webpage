import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./app/routes"; // o el path real a tu archivo del router
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
