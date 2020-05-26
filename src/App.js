import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

// Page Imports
import HomePage from "./pages/HomePage";

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path = '/' component={HomePage} exact />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
