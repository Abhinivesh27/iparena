import React from "react";
import "./App.css";
import Layout from "./layout";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
 } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />

        
      </Routes>
    </Router>
  )
}

export default App;
