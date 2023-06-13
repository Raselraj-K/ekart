import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Logins from "./Component/Logins";
import Dashboard from "./Component/Dashboard";
import About from "./Component/About";
import Contacts from "./Component/Contacts";
import { useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Logins />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
