import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/NidhishZalaLOGO.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHome = location.pathname === "/";

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="nav-logo">
          <img id="logo" src={logo} alt="" />
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Pricing
            </NavLink>
          </li>

          {isHome && (
            <>
              <li>
                <a href="#projects" className="nav-link">Projects</a>
              </li>
              <li>
                <a href="#tech" className="nav-link">Tech</a>
              </li>
              <li>
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </>
          )}
        </ul>

        {/* Desktop Resume Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            className="nav-cta"
            onClick={() => navigate("/resume")}
          >
            Resume
          </button>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" end>Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/pricing" className="nav-link">Pricing</NavLink>

        {isHome && (
          <>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#tech" className="nav-link">Tech</a>
            <a href="#contact" className="nav-link">Contact</a>
          </>
        )}

        {/* Mobile Resume Button */}
        <div style={{ marginTop: "1.5rem" }}>
          <button
            className="btn-primary"
            style={{ width: "100%", textAlign: "center" }}
            onClick={() => {
              setMenuOpen(false);
              navigate("/resume");
            }}
          >
            View Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;