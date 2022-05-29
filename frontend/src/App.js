import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Page1_body from "./components/Page1_body";
import Login_button from "./components/Login_button";
import Home from "./components/pages/Home";
import Map from "./components/pages/Map";
import Market from "./components/pages/Market";
import Search from "./components/pages/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [something, setSomething] = useState("aaa");

  const fetchData = () => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => {
        setSomething(data.data);
        console.log("hi");
      }, []);
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home page={"home"} />} />
        <Route exact path="/search" element={<Search page={"search"} />} />
        <Route exact path="/market" element={<Market page={"market"} />} />
        <Route exact path="/map" element={<Map page={"map"} />} />
      </Routes>
    </Router>
  );
}

export default App;
