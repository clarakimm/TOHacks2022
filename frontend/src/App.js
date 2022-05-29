import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Page1_body from "./components/Page1_body"
import Login_button from "./components/Login_button";

function App() {
  const [something, setSomething] = useState("");

  fetch("http://127.0.0.1:5000/")
    .then((res) => res.json())
    .then((data) => setSomething(data));

  return (
    <div className="App">
      {something}
      <Header />
      <Page1_body />
      <Form />
    </div>
  );
}

export default App;
