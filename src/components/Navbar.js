import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/sullens.jpg";
import '../styles/Navbar.css'; // CSS dosyasını import edin

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar_links">
          <Link to="/">Anasayfa</Link>
          <Link to="/projects">Projeler</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
    </nav>
  );
};

export default Navbar;
