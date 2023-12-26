import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'; // Stil dosyanızı oluşturun ve içeriği düzenleyin

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2023 Şule Nur Sekmen - Portfolio Web Site</p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sulenursekmen/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize='small' />
          </a>
          <a href="https://github.com/sulenursekmen" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize='small' />
          </a>
          {/* Diğer sosyal medya ikonları buraya ekleyin */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
