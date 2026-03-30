import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Servies = () => {
  useScrollAnimation();
  return (
    <div style={{background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "6rem", color: "var(--text-primary)"}}>
      Coming soon
    </div>
  );
};

export default Servies;
