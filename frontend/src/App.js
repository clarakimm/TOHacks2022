import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Map from "./components/pages/Map_2";
import Market from "./components/pages/Market";
import Search from "./components/pages/Search";
import Result from "./components/pages/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [something, setSomething] = useState("aaa");

  const fetchData = () => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => {
        setSomething(data.data);
      }, []);
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
