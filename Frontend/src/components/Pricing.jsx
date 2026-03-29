import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";


const Pricing = () => {
  useScrollAnimation();

  return (
    <div className="price-grid" style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "6rem", color: "var(--text-primary)", display: "grid", gap: "2vw", margin: "0 3vw" }}>
      <div className="card price-card" style={{background: "var(--bg-card)", padding: "2rem", borderRadius: "2vw",}}>
        <p style={{fontSize: "1.5rem"}}>Website Developement</p>
        <p className="price" style={{fontSize: "3rem"}}>₹25,000</p>
        <p style={{color: "var(--text-secondary)"}}>one time</p>
        <ul className="tickmark" style={{padding: "2vw 0",}}>
          <li style={{padding: "4px"}}>Custom Design</li>
          <li style={{padding: "4px"}}>Mobile Responsive</li>
          <li style={{padding: "4px"}}>SEO Optimized</li>
          <li style={{padding: "4px"}}>Contact Forms</li>
          <li style={{padding: "4px"}}>Social Media Integration</li>
          <li style={{padding: "4px"}}>Google Analytics</li>
        </ul>
      </div>
      <div className="card price-card" style={{background: "var(--bg-card)", padding: "2rem", borderRadius: "2vw",}}>
        <p style={{fontSize: "1.5rem"}}>Website Developement</p>
        <p className="price" style={{fontSize: "3rem"}}>₹25,000</p>
        <p style={{color: "var(--text-secondary)"}}>one time</p>
        <ul className="tickmark" style={{padding: "2vw 0",}}>
          <li style={{padding: "4px"}}>Custom Design</li>
          <li style={{padding: "4px"}}>Mobile Responsive</li>
          <li style={{padding: "4px"}}>SEO Optimized</li>
          <li style={{padding: "4px"}}>Contact Forms</li>
          <li style={{padding: "4px"}}>Social Media Integration</li>
          <li style={{padding: "4px"}}>Google Analytics</li>
        </ul>
      </div>
      <div className="card price-card" style={{background: "var(--bg-card)", padding: "2rem", borderRadius: "2vw",}}>
        <p style={{fontSize: "1.5rem"}}>Website Developement</p>
        <p className="price" style={{fontSize: "3rem"}}>₹25,000</p>
        <p style={{color: "var(--text-secondary)"}}>one time</p>
        <ul className="tickmark" style={{padding: "2vw 0",}}>
          <li style={{padding: "4px"}}>Custom Design</li>
          <li style={{padding: "4px"}}>Mobile Responsive</li>
          <li style={{padding: "4px"}}>SEO Optimized</li>
          <li style={{padding: "4px"}}>Contact Forms</li>
          <li style={{padding: "4px"}}>Social Media Integration</li>
          <li style={{padding: "4px"}}>Google Analytics</li>
        </ul>
      </div>
    </div>
    
  );
};

export default Pricing;
