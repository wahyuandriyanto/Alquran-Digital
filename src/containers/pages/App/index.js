import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from '../Dashboard';


function App() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Dashboard} />
        </div>
      </Router>
    );
  }
  
  export default App;