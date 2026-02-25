import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = ({ onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = location.pathname === "/";

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="nav-logo">
          N<span>.</span>Z
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} end>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>About</NavLink></li>
          {isHome && (
            <>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#tech" className="nav-link">Tech</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </>
          )}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button className="nav-cta" onClick={onResumeClick}>Resume</button>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" end>Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        {isHome && (
          <>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#tech" className="nav-link">Tech</a>
            <a href="#contact" className="nav-link">Contact</a>
          </>
        )}
        <div style={{ marginTop: "1.5rem" }}>
          <button className="btn-primary" style={{ width: "100%", textAlign: "center" }} onClick={() => { setMenuOpen(false); onResumeClick(); }}>
            View Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
