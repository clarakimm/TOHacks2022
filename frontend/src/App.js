import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Map_2 from "./components/pages/Map_2";
import Market from "./components/pages/Market";
import Search from "./components/pages/Search";
import Result from "./components/pages/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/map" element={<Map_2 />} />
        <Route exact path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
