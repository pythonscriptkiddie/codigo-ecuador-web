import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import "./Roundup.css";

class RoundupCard extends Component {
  render() {
    let roundup = this.props.roundup;

    return (
      <>
        <Card className="roundup-card">
          <Image src={roundup.image} className="roundup-image" />

          <Card.Content className="card-content">
            <Card.Header>
              <div className="roundup-headline">{roundup.title}</div>
              <br />
            </Card.Header>

            <Card.Description>
              <div className="roundup-description">
                {roundup.description}
                <br />
              </div>
            </Card.Description>
          </Card.Content>

          <Card.Content extra className="cardBottom right">
            <h3>{roundup.subtitle}</h3>
          </Card.Content>
        </Card>
        <br />
        <br />
      </>
    );
  }
}

export default RoundupCard;