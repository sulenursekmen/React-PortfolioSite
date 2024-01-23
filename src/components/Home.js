// Home.js

import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const lastParagraph =
    "Software Developer | React Developer | Front end Developer";
  const typingSpeed = 100;
  const [text, setText] = useState("");

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

  return (
    <>
      <div className="home-container">
        <img
          className="background-image"
          src="https://raw.githubusercontent.com/sulenursekmen/React-PortfolioSite/main/src/assets/black.svg"
          alt="Background"
        />
        <div className="container">
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
