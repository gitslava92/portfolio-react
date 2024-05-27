import { App } from "./App";
import "./index.css";
import { i18nInitConfig } from "@common/i18n";
import i18n from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init(i18nInitConfig);

export default i18n;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
