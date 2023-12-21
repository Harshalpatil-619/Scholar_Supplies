import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import your Navbar component
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import Stats from "./components/Stats";
import Store from "./components/Store";
import Welcome from "./components/welcome";


const App = () => {


  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="gradient-bg-welcome">
          <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/store" element={<Store />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/account" element={<Welcome />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
