import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Contact from "./components/Contact";
import ResumeModal from "./components/ResumeModal"; 
import SplashScreen from "./components/SplashScreen";
import Pricing from "./components/Pricing";

const App = () => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      {splashDone && (
        <>
          <Cursor />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resume" element={<ResumeModal />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;