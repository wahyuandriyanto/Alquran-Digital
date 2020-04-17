import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import DetailSurah from "../DetailSurah";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Dashboard} />
        <Route path="/detail/:id" component={DetailSurah} />
      </div>
    </Router>
  );
}

export default App;
