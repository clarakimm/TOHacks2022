import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Test from "./components/Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route exact path="/">
          <Test page={home} />
        </Route>
        <Route exact path="/search">
          <Test page={search} />
        </Route>
        <Route exact path="/market">
          <Test page={market} />
        </Route>
        <Route exact path="/map">
          <Test page={map} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
