import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/Home/HomePage";
import Test from "./pages/Home/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
