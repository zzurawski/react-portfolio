import React from "react";
import "../Styles/header.css";
import { Card } from "semantic-ui-react";

export default function aboutMe() {
  return (
    <div className="about">
      <Card
        id="about"
        className="centered"
        >
            <Card.Content id="name" header="Zachariah Zurawski" />
            <Card.Description>
                "Insert about me"
            </Card.Description>
        </Card>
    </div>
  );
}
