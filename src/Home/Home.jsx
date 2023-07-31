import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import App from "../App";
import Signin from "../Login/Signin";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  if (!user) {
    return <Signin />;
  } else {
    return <App />;
  }
};

export default Home;
