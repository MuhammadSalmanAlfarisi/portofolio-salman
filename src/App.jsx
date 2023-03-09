import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {


  return (
    <BrowserRouter>
      <div className="w-full h-full flex flex-row justify-items-start ">
        <div className="w-[50px] sm:w-[10px] flex-none z-10">
          <Navbar />
        </div>
        <div className="flex lg:w-[100%] md:w-full w-full ml-5 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
