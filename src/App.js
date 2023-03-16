import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Descargar from "./Descargar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Descargar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
