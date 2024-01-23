// Home.js

import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Home = () => {
  const lastParagraph =
    "Software Developer | React Developer | Front end Developer";
  const typingSpeed = 25;
  const [text, setText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const typewriter = (textIndex) => {
      if (textIndex <= lastParagraph.length) {
        setText(lastParagraph.slice(0, textIndex));
        setTimeout(() => typewriter(textIndex + 1), typingSpeed);
      }
    };

    typewriter(0);

    return () => clearTimeout();
  }, [lastParagraph, typingSpeed]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className="home-container">
        {!imageLoaded && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress color="warning" />
          </Box>
        )}
        <img
          className={`background-image ${
            imageLoaded ? "loaded" : "not-loaded"
          }`}
          src="https://raw.githubusercontent.com/sulenursekmen/React-PortfolioSite/main/src/assets/black.svg"
          alt="Background"
          onLoad={handleImageLoad}
        />
        <div className={`container ${imageLoaded ? "visible" : "hidden"}`}>
          <h1 className="name">Hi, I am Şule Nur Sekmen</h1>
          <p className="text">{"<" + text + "/>"}</p>
          <p className="paragraph">Skills</p>
          <p className="paragraph">
            Front-End: JavaScript, React, HTML, CSS, Bootstrap, MUI
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
