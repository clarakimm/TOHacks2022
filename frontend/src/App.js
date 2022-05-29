import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Test from "./components/Test";
import Home from "./components/Home";
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
        <Route exact path="/search" element={<Test page={"search"} />} />
        <Route exact path="/market" element={<Test page={"market"} />} />
        <Route exact path="/map" element={<Test page={"map"} />} />
      </Routes>
    </Router>
  );
}

export default App;
