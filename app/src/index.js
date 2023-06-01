import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import AuthContainer from "./components/App/Auth/AuthContainer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContainer>
        <App />
      </AuthContainer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
