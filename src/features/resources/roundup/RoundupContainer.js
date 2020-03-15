import React, { Component } from "react";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Roundup.css";
import Slider from "react-slick";
import { roundupLinks } from "./RoundupLinks";

class RoundupContainer extends Component {
  render() {
    let num;
    this.props.size === "mobile" ? (num = 1) : (num = 2);

    let settings = {
      dots: true,
      infinite: true,
      speed: 4000,
      slidesToShow: num,
      slidesToScroll: 1,
      autoplay: false,
      autoplayspeed: 8000
    };

    return (
      <div className="main-container">
        <div className="headline banner-headline">
          <span className="gold">Roundup</span>
        </div>

        <div className="roundup-container-text">
          <div className="subhead center roundup-subhead">
            Código Ecuador maintains a news roundup featuring the latest news on
            coding and web development!
          </div>

          <p>
          <p>Testing HTML export subcommand</p>
          <p>python</p>
          <p>scripting/automation</p>
          <p>Careers</p>
          <p><a href ="https://www.infoworld.com/article/3532009/nvidias-rapids-python-analytics-on-the-gpu.html">Nvidia’s Rapids: Python analytics on the GPU</a>" (3/13/2020), Not specified</p>
          <p><a href ="https://www.theguardian.com/world/2020/mar/13/coronavirus-pandemic-visualising-the-global-crisis">The coronavirus pandemic: visualising the global crisis</a>(3/13/2020) Not specified</p>
          <p>data science</p>
          <p>software engineering</p>
          <p>learning to code</p>
          <p>skills</p>
          <p><a href ="https://www.sciencedaily.com/releases/2020/03/200302103735.htm">Not a 'math person'? You may be better at learning to code than you think</a>(3/4/2020) Not specified</p>
<p>Languages</p>
          <p><a href="https://www.techrepublic.com/article/why-python-is-likely-to-pass-java-in-popularity/">Why Python is likely to pass Java in popularity</a>(3/10/2020) Not specified</p><p>machine learning</p>
          </p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { size: state.size };
};
export default connect(mapStateToProps)(RoundupContainer);