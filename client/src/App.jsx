import React from "react";
import { Routes, Route } from "react-router";

import Navbar from "./layout/Navbar";

import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
