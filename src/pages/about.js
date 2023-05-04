import React from "react";
import { Card } from "semantic-ui-react";
import "../components/about.css"

export default function About() {
  return (
    <div className="about">
      <Card
        id="about"
        className="centered"
        >
            <Card.Content className="name" header="Zachariah Zurawski" />
            <Card.Description className="aboutme">
                Zachariah is a recent graduate of the Case Western Reserve Full-Stack Development Bootcamp.
                With a background in business, he would like to utilize the knowlege in both fields to create and build a properly marketed and
                customer friendly webpage. Throughout his education, he has held leadership roles within a year of being at the place of employment and student-life.
                Adaptability and hard-working are two major attributes he can be defined by. 
            </Card.Description>
        </Card>
    </div>
  );
}
