import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  const lastParagraph = "Şule Nur Sekmen | Software Developer";
  const typingSpeed = 100; // Adjust the speed as needed

  const [text, setText] = useState('');

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
    <div className="home-container">
      <div className="left-content">
        <p>{text}</p> 

      
        <div className="logo-links">
          <a href="https://www.linkedin.com/in/sulenursekmen/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize='large'/>
          </a>
          <a href="https://github.com/sulenursekmen" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize='large'/>
          </a>
        </div>

        {/* Buton */}
        <div className="button-container">
          <button>Katıl Bana!</button>
        </div>
      </div>
      <div className="right-content">
        {/* Sağ taraftaki boş alan */}
      </div>
    </div>
  );
};

export default Home;
