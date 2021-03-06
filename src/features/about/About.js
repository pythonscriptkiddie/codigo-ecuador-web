import React from "react";
import { connect } from "react-redux";
import "./About.css";
import OurStory from "./ourStory/OurStory";
import CeoLetter from "./ourStory/ceoLetter";

const About = () => {
  return (
    <div className="about-container main-container">
      <div className="our-story">
        <OurStory />
      </div>
      <div className="ceo-letter">
        <CeoLetter />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(About);
