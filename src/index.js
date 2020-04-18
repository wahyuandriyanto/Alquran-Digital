import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/pages/App";
import { Helmet } from "react-helmet";


ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Al-Quran Digital</title>
      <meta name="description" content="Read & Listen Everywhere" />
    </Helmet>
    <App />
  
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
