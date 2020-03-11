import React, { Component } from "react";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Roundup.css";
import Slider from "react-slick";
import { roundupLinks } from "./RoundupLinks";
import RoundupCard from "./RoundupCard";

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
            Coding education is making a huge impact throughout the developing
            world. People are learning the technical skills necessary to build
            tomorrow's cutting-edge applications. From Colombia to Lebanon,
            nonprofit education is opening doors in high paying technology
            careers for thousands of women and individuals. The work our
            organizations do are sparking a new wave of research in how we can
            create a more equal world.
          </p>
        </div>

        <Slider {...settings}>
          {roundupLinks.map((roundup, index) => (
            <RoundupCard key={index} roundup={roundup} />
          ))}

          <br />
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { size: state.size };
};
export default connect(mapStateToProps)(RoundupContainer);