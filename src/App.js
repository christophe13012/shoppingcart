import React from "react";
import "./App.css";
import Header from "./components/header";
import Liste from "./components/liste";

function App() {
  return (
    <div className="App" style={{ padding: "20px 70px" }}>
      <Header />
      <Liste />
    </div>
  );
}

export default App;
