import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import ExportScreen from "./Components/ExportScreen/ExportScreen";
import Signup from "./Signup/Signup";
import Signin from "./Login/Signin";
import ProtectRoute from "./Protected/ProtectRoute";

import { ProgressSpinner } from "primereact/progressspinner";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const userData = localStorage.getItem("user");
    setUser(userData);
    setLoading(false);
  }, []);

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (loading) {
    return <ProgressSpinner style={styles} />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ProtectRoute isLoggedIn={user}>
                <ExportScreen />
              </ProtectRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
