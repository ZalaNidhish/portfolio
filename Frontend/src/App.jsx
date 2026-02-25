import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import ResumeModal from "./components/ResumeModal";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      {splashDone && (
        <>
          <Cursor />
          <Navbar onResumeClick={() => setResumeOpen(true)} />
          <Routes>
            <Route path="/" element={<Home onResumeClick={() => setResumeOpen(true)} />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
        </>
      )}
    </div>
  );
};

export default App;
