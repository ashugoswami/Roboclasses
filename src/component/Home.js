import React from "react";
import "../styles/home.css";
import Navbar from "./Navbar";
import abt from "../Assets/images/homeback.png";
import MainBody from "./MainBody";
import Studentspeak from "./Studentspeak";
import KidsCreativity from "./KidsCreativity";
import Courseright from "./Courseright";
import Footer from "./Footer";
import Trending from "./Trending";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="home_main"
        style={{
          backgroundImage: `url(${abt})`,
          height: "68.2vh",
          width: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="cards_home">
          <h1>After school activity</h1>
          <p>Robotics,STEM and programming courses for kids.</p>
          <button className="learnMore-btn">Learn More</button>
          <button className="register-btn mx-4">Register Now</button>
        </div>
      </div>
      <div className="second-box">
        <div className="container details-box">
          <div>
            <h2>STEM</h2>
            <p>ACCREDITED PROGRAM</p>
          </div>
          <div>
            <h2>2600+</h2>
            <p>Students</p>
          </div>
          <div>
            <h2>30+</h2>
            <p>Specialized courses</p>
          </div>
          <div>
            <h2>2400+</h2>
            <p>Happy parents</p>
          </div>
        </div>
      </div>
      <MainBody />
      <Studentspeak />
      <KidsCreativity />
      <Courseright />
      <Trending />
      <Footer />
    </>
  );
};

export default Home;
