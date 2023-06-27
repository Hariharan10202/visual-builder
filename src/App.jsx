import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Screen from "./Components/Screen/Screen";
import Config from "./Components/Config/Config";
import Modal from "./Components/Modal/Modal";
import Template from "./Components/Template/Template";
import DefaultTemplate from "./Components/DefaultTemplate/DefaultTemplate";

const App = () => {
  const [component, setComponent] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState([]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Modal />} />
          <Route path="/template" element={<Template />} />
          <Route path="/default" element={<DefaultTemplate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
