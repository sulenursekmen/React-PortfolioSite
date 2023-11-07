import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/sullens.jpg";
import '../styles/Navbar.css'; // CSS dosyasını import edin

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main">
        <Link to="/" className="navbar_logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="navbar_links">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
