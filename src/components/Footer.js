import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css'; // CSS dosyasını import edin

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
            <LinkedInIcon/>
            <GitHubIcon/>
            <InstagramIcon/>
      </div>
      <p>Tüm hakları saklıdır | Şule Nur Sekmen </p>
    </div>
  )
}

export default Footer
