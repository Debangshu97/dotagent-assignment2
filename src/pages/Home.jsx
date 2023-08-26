import React from "react";
import Header from "../components/Header";
import MyImage from "../assets/cat.svg";
import { Link } from "react-router-dom";
const MainPage = () => {
  /*The Home page that appears on opening the webapp . It contains the link to the Chat page on the bottom  */

  return (
    <div className="home-container">
      <Header />
      <div className="space"></div>
      <div className="container">
        <p className="text">
          Do you often keep your feelings to yourself?
          <div className="space"></div>
          <p className="inner-text">
            Sometimes the people around you wont understand your journey.They
            dont need to ,its not for them.
          </p>
        </p>
        <img src={MyImage} alt="" className="image" />
      </div>

      <div className="support-header">How to get support?</div>
      <div className="support-para">
        Our goal is to power you. We got your back!😄
      </div>
      <div className="container-button">
        <button className="button-52">
          <Link to="/chat" className="link">
            Talk with your private assistant 🤫
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
