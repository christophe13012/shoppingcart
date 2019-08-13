import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/header";
import Liste from "./components/liste";

function App() {
  return (
    <div className="App" style={{ padding: "20px 70px" }}>
      <Header />
      <Liste />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
