import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Artikelside } from "./components/Artikelside.jsx";

const App = () => (
  <div className="container">
    <Artikelside/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
