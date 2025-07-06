// File: src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f8f9fa", display: 'flex', justifyContent: 'space-between' }}>
      <div><strong>CreateKonnect</strong></div>
      <div>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/pricing" style={{ margin: "0 1rem" }}>Pricing</Link>
        <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
        <Link to="/login" style={{ margin: "0 1rem" }}>Login</Link>
        <Link to="/signup" style={{ margin: "0 1rem" }}>Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
