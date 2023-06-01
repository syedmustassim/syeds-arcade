import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import './Fonts/Westgate-Regular.otf'
import AppProvider from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/FilterContext";
import AuthProvider from "./Context/AuthContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <AppProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
