import React from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
