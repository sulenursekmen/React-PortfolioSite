import React, { useState, useEffect } from "react";
import "../styles/Home.css";
const Home = () => {
  const lastParagraph =
    "Software Developer | React Developer | Front end Developer";
  const typingSpeed = 100; // Adjust the speed as needed

  const [text, setText] = useState("");

  const typewriter = (textIndex) => {
    if (textIndex <= lastParagraph.length) {
      setText(lastParagraph.slice(0, textIndex));
      setTimeout(() => typewriter(textIndex + 1), typingSpeed);
    }
  };

  useEffect(() => {
    typewriter(0);
    return () => clearTimeout();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="container">
          <h1 className="name">Hi , I am Şule Nur Sekmen</h1>
          <p className="text"> {"<" + text + "/>"}</p>
          <p className="paragraph">Skills</p>
          <p className="paragraph">
            Front-End: JavaScript, React, HTML , CSS , Bootstrap , MUI
          </p>
        </div>

      </div>
    </>
  );
};

export default Home;
