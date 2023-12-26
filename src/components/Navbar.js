import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/sullens.jpg";
import '../styles/Navbar.css'; // CSS dosyasını import edin

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      
      <div className={`navbar_links ${showMenu ? "show" : ""}`}>
        <Link to="/" onClick={handleMenuToggle}>
          Anasayfa
        </Link>
        <Link to="/projects" onClick={handleMenuToggle}>
          Projeler
        </Link>
        {/* <Link to="/menu">Menü</Link> */}
        {/* <Link to="/about" onClick={handleMenuToggle}>
          Hakkımda
        </Link> */}
        <Link to="/certificate" onClick={handleMenuToggle}>
          Sertifikalar
        </Link>
        <Link to="/education" onClick={handleMenuToggle}>
          Eğitim
        </Link>

        <Link to="/about" onClick={handleMenuToggle}>
          Blog
        </Link>
        <Link to="/contact" onClick={handleMenuToggle}>
          İletişim
        </Link>
      </div>
      <div className="hamburger-menu" onClick={handleMenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
