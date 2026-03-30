import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";


const Pricing = () => {
  useScrollAnimation();

  return (
    <div className="price-grid" style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "6rem", color: "var(--text-primary)", display: "grid", gap: "2vw", margin: "0 3vw" }}>
      <div className="card price-card" style={{background: "var(--bg-card)", padding: "2rem", borderRadius: "2vw",}}>
        <p style={{fontSize: "1.5rem"}}>Landing Page</p>
        <p className="price" style={{fontSize: "3rem"}}>₹15k</p>
        <p style={{color: "var(--text-secondary)"}}>one time</p>
        <ul className="tickmark" style={{padding: "2vw 0",}}>
          <li style={{padding: "4px"}}>1–3 Pages Website</li>
          <li style={{padding: "4px"}}>Custom Design</li>
          <li style={{padding: "4px"}}>Mobile Responsive</li>
          <li style={{padding: "4px"}}>SEO Optimized</li>
          <li style={{padding: "4px"}}>Contact Forms</li>
          <li style={{padding: "4px"}}>Social Media Links</li>
          <li style={{padding: "4px"}}>Google Analytics setup</li>
          <li style={{padding: "4px"}}>Google Maps Integration</li>
        </ul>
      </div>
      <div className="card price-card" style={{background: "var(--bg-card)", padding: "2rem", borderRadius: "2vw",}}>
        <p style={{fontSize: "1.5rem"}}>E-commerce</p>
        <p className="price" style={{fontSize: "3rem"}}>₹25k</p>
        <p style={{color: "var(--text-secondary)"}}>one time</p>
        <ul className="tickmark" style={{padding: "2vw 0",}}>
          <li style={{padding: "4px"}}>Custom Design</li>
          <li style={{padding: "4px"}}>Mobile Responsive</li>
          <li style={{padding: "4px"}}>Product Listing</li>
          <li style={{padding: "4px"}}>Shopping Cart System</li>
          <li style={{padding: "4px"}}>Payment Gateway Integration</li>
          <li style={{padding: "4px"}}>Order Management System</li>
          <li style={{padding: "4px"}}>User Login & Signup</li>
          <li style={{padding: "4px"}}>Basic Admin Panel</li>
          <li style={{padding: "4px"}}>Email Notifications</li>
          <li style={{padding: "4px"}}>SEO Optimized</li>
          <li style={{padding: "4px"}}>Contact Forms</li>
          <li style={{padding: "4px"}}>Social Media Integration</li>
          <li style={{padding: "4px"}}>Google Analytics</li>
          <li style={{padding: "4px"}}>Google Maps Integration</li>

        </ul>
      </div>
      <div className="card price-card" style={{background: "var(--bg-card)", padding: "2rem", borderRadius: "2vw",}}>
        <p style={{fontSize: "1.5rem"}}>WebApp Developement</p>
        <p className="price" style={{fontSize: "3rem"}}>₹50k</p>
        <p style={{color: "var(--text-secondary)"}}>one time</p>
        <ul className="tickmark" style={{padding: "2vw 0",}}>
          <li style={{padding: "4px"}}>Fully Custom Web Application</li>
          <li style={{padding: "4px"}}>Advanced Admin Dashboard</li>
          <li style={{padding: "4px"}}>Role-Based Access</li>
          <li style={{padding: "4px"}}>Authentication</li>
          <li style={{padding: "4px"}}>API Integration</li>
          <li style={{padding: "4px"}}>Database Design & Optimization</li>
          <li style={{padding: "4px"}}>Scalable Architecture</li>
          <li style={{padding: "4px"}}>Mobile Responsive</li>
          <li style={{padding: "4px"}}>SEO Optimized</li>
          <li style={{padding: "4px"}}>Contact Forms</li>
          <li style={{padding: "4px"}}>Social Media Integration</li>
          <li style={{padding: "4px"}}>Google Analytics</li>
          <li style={{padding: "4px"}}>Google Maps Integration</li>

        </ul>
      </div>
    </div>
    
  );
};

export default Pricing;
