import React, { Component } from "react";
import "./Navbar.css";
// Capitalized B in above link to make it work
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <Container className="nav-buttons">
        <Link className="nav-button" to="/">
          Home
        </Link>

        <Link exact className="nav-button" to="/about">
          About
        </Link>

        <Link exact className="nav-button" to="/services">
          Services
        </Link>

        <Link exact className="nav-button" to="/resources">
          Resources
        </Link>

        <Link exact className="nav-button" to="/blog">
          Blog
        </Link>

        <Link exact className="nav-button" to="/donate">
          Donate
        </Link>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { size: state.size };
};

export default connect(mapStateToProps)(Navbar);
