import React from "react";
import { Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Nav from "./components/Nav"
import Theme from "./components/styled/Theme";
import { GlobalStyle } from "./components/styled/GlobalStyle";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Theme>
  );
}

export default App;
