import React from "react";
import {Card, Container, Header, List, ListContent} from "semantic-ui-react";
import "../components/home.css"

export default function Home() {

    return (
        <div>
            <Container id="welcomebody">
                <Header id="name">Zachariah Zurawski</Header>
                <Card id="list">
                    <ul>
                        <li>Studied Finance/IS at the University of Cincinnati</li>
                        <li>Completed CaseWestern Reserve Univerity's Full-Stack Coding Bootcamp</li>
                        <li>Holds/Held leadership positions in the workplace and student government</li>
                    </ul>
                </Card>
            </Container>

            <footer id="contact">
                <List>
                    <ListContent>Email: zzurawski18@gmail.com</ListContent>
                    <ListContent>Phone: 440-781-4320</ListContent>
                    <ListContent>GitHub: zzurawski</ListContent>
                </List>
            </footer>
        </div>
    )
}