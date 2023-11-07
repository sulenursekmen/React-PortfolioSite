import React from "react";
import BannerImage from "../assets/background.svg";
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>

      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p> Nisi sint Lorem culpa quis in in ex duis. Occaecat pariatur adipisicing magna adipisicing ex. Minim proident proident esse labore nulla. Incididunt consectetur est exercitation anim culpa ea nulla labore deserunt enim fugiat ut proident. Consectetur duis est mollit pariatur reprehenderit sit dolore. Magna ea incididunt nulla minim tempor veniam exercitation dolor ullamco ad cupidatat dolor labore anim.Eu cupidatat ex commodo excepteur. Nisi amet esse et Lorem non nisi nisi labore deserunt id. Fugiat mollit eu et voluptate. Sint ipsum nostrud aliqua laboris eu mollit incididunt consectetur anim cillum culpa. Mollit anim ex irure eiusmod veniam nisi.
        </p>
      </div>
    </div>
  );
};

export default About;
