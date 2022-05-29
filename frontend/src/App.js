import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [something, setSomething] = useState("");

  fetch("http://127.0.0.1:5000/")
    .then((res) => res.json())
    .then((data) => setSomething(data));

  return (
    <div className="App">
      {something}
      <Header></Header>
      <Form />
    </div>
  );
}

export default App;
