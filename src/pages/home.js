import React from "react";
import {Card, Container, Header, List, ListContent} from "semantic-ui-react";
import "../components/home.css"

export default function homePage() {

    return (
        <div>
            <h2 id="welcome">Welcome to my Page!</h2>
            <Container id="welcomebody">
                <Header id="name">Zachariah Zurawski</Header>
                <Card>
                    <ul>
                        <li>Studied Finance/IS at the University of Cincinnati</li>
                        <li>Completed CaseWestern Reserve Univerity's Full-Stack Coding Bootcamp</li>
                        <li>Holds/Held leadership positions in the workplace and student government</li>
                    </ul>
                </Card>
            </Container>

            <Container id="projects">
                <Card id="project1">
                    <Card.Header>project 1</Card.Header>
                    <Card.Content>desc of proj</Card.Content>
                </Card>
                <Card id="project2">
                    <Card.Header>Project 2</Card.Header>
                    <Card.Content>desc of proj</Card.Content>
                </Card>
                <Card id="project3">
                    <Card.Header>Project 3</Card.Header>
                    <Card.Content>desc of proj</Card.Content>
                </Card>
            </Container>

            <Container id="contact">
                <List>
                    <ListContent>Email: zzurawski18@gmail.com</ListContent>
                    <ListContent>Phone: 440-781-4320</ListContent>
                    <ListContent>GitHub: zzurawski</ListContent>
                </List>
            </Container>
        </div>
    )
}