// Navbar.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";
import "../styles/Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
const PDF_FILE_URL = "http://localhost:3000/cv.pdf";
const Navbar = () => {
  const lastParagraph =
    "Software Developer | React Developer | Front end Developer";
  const typingSpeed = 100;

  const [text, setText] = useState("");
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const typewriter = (textIndex) => {
    if (textIndex <= lastParagraph.length) {
      setText(lastParagraph.slice(0, textIndex));
      setTimeout(() => typewriter(textIndex + 1), typingSpeed);
    }
  };

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();

    // Kullanıcıya indirme işlemini onaylat
    const isConfirmed = window.confirm(
      `Dosyayı indirmek istiyor musunuz? (${fileName})`
    );

    if (isConfirmed) {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const blobURL = window.URL.createObjectURL(new Blob([blob]));
          const aTag = document.createElement("a");
          aTag.href = blobURL;
          aTag.setAttribute("download", fileName);
          aTag.setAttribute("crossorigin", "anonymous");
          document.body.appendChild(aTag);
          aTag.click();
          document.body.removeChild(aTag);
        });
    }
  };
  useEffect(() => {
    typewriter(0);
    return () => clearTimeout();
  }, []);

  return (
    <nav className="navbar">
      <div className={`links ${menuActive ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/projects" onClick={closeMenu}>
        Portfolio
        </Link>
        {/* <Link to="/contact" onClick={closeMenu}>
          CV
        </Link> */}
        <div className="navbar-button">
          {" "}
          <Button
            variant="outlined" color="warning"
            style={{ borderColor: '#fff', color: '#fff' }}
            onClick={() => {
              downloadFileAtURL(PDF_FILE_URL);
            }}
          >
            <span>
              Download CV <DownloadIcon />
            </span>
          </Button>
        </div>

       
      </div>

      <div className="title-navbar">
        <p className="navbar-name">Şule Nur Sekmen</p>
        {/* <p className='title-text'> {'<' + text + '/>'}</p> */}
      </div>

      <div className="logos">
        <a
          href="https://www.linkedin.com/in/sulenursekmen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/sulenursekmen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/sulenursekmen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/sulenursekmen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </a>
      </div>

      {/* <div
        className={`hamburger-menu ${menuActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </nav>
  );
};

export default Navbar;
