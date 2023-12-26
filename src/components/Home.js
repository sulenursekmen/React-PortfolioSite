import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const PDF_FILE_URL = 'http://localhost:3000/cv.pdf'
const Home = () => {
  const lastParagraph = "React Developer | Front end Developer";
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



  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop();
  
    // Kullanıcıya indirme işlemini onaylat
    const isConfirmed = window.confirm(`Dosyayı indirmek istiyor musunuz? (${fileName})`);
  
    if (isConfirmed) {
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const blobURL = window.URL.createObjectURL(new Blob([blob]))
          const aTag = document.createElement('a');
          aTag.href = blobURL;
          aTag.setAttribute('download', fileName);
          aTag.setAttribute('crossorigin', 'anonymous');
          document.body.appendChild(aTag);
          aTag.click();
          document.body.removeChild(aTag);
        });
    }
  };
  
  return (
    <div className="home-container">
      <div className="left-content">
        <h1 className='name'>Hi , I am Şule Nur Sekmen</h1>
        <p className='text'> {'<' + text + '/>'}</p>

        <div className="underline"></div>
        <p>As a Software Engineer with nearly one year of hands-on experience in the dynamic software industry, I have embarked on a comprehensive learning journey that spans Back-End and Mobile development, as well as Front-End expertise. My proficiency extends across an array of technologies, including JavaScript, React, Vue.js, C#, .Net MVC, Dart, and MsSQL, providing me with a versatile toolkit for crafting robust and innovative solutions.</p>
        <p>
        I am driven by a success- and result-oriented mindset, with a strong inclination towards research and a commitment to personal and professional development. Motivated by the desire to not only develop projects but also to generate new and impactful ideas, I bring a proactive approach to problem-solving.

        </p>

        <p>
        My dedication to staying abreast of the latest technological advancements underscores my commitment to continuous improvement. While I have honed my skills across various domains, my primary focus lies in the realm of Front-End software processes. By closely monitoring technological developments, I strive to contribute to the evolution of software development practices, aiming to deliver cutting-edge solutions.
        </p>

        <p>In essence, my journey in the software industry reflects a passion for growth, a commitment to excellence, and an unwavering motivation to push the boundaries of what can be achieved in Front-End development. I eagerly anticipate the opportunities that lie ahead as I continue to explore and contribute to the ever-evolving landscape of software engineering.</p>
        <div className="logo-links">
          <a href="https://www.linkedin.com/in/sulenursekmen/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize='large' />
          </a>
          <a href="https://github.com/sulenursekmen" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize='large' />
          </a>

          <a href="https://github.com/sulenursekmen" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize='large' />
          </a>

         

          <a href="https://github.com/sulenursekmen" target="_blank" rel="noopener noreferrer">
            <TwitterIcon fontSize='large' />
          </a>
        </div>

        {/* Button */}
        <div className="button-container">
          <button onClick={() => { downloadFileAtURL(PDF_FILE_URL) }}><span>Download Resume <DownloadIcon /></span> </button>
        </div>
      </div>
      <div className="right-content">
        {/* Sağ taraftaki boş alan */}
      </div>
    </div>
  );
};

export default Home;
