import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import HomePage from "../assets/homepage.svg";
export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${HomePage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};

export default Home
