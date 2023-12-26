// Contact.jsx
import React from "react";
import '../styles/Contact.css';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-form">
        <h1>Benimle İletişime Geçin</h1>
        <form>
          <div className="input-div">
            <TextField
              id="outlined-basic"
              label="Adı Soyadı"
              variant="outlined"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              style={{
                backgroundColor: "white",
                color: "#4B0082",
                width: "100%",
                textAlign: 'center'
              }}

            />
          </div>
          <div className="input-div">
            <TextField
              id="outlined-basic"
              label="E-posta"
              variant="outlined"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              style={{
                backgroundColor: "white",
                color: "#4B0082",
                width: "100%",
                textAlign: 'center'

              }}

            /></div>
          <div className="input-div">
            <TextField
              id="outlined-basic"
              label="Konu"
              variant="outlined"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SubjectIcon />
                  </InputAdornment>
                ),
              }}
              style={{
                backgroundColor: "white",
                color: "#4B0082",
                width: "100%",
                textAlign: 'center'
              }}

            />
          </div>

          <label>Mesajınız</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
