import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map_Page/Map_components/Map";

function App() {
  const [something, setSomething] = useState("");

  fetch("http://127.0.0.1:5000/")
    .then((res) => res.json())
    .then((data) => setSomething(data));

  return (
    <div className="App">
      
      <Map/>

    </div>
  );
}

export default App;
