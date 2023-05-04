import React from "react";
import {Card} from "semantic-ui-react";
import { projectData } from "../assets/projectData";
import "../components/project.css"

export default function Projects() {
    return (
        <div id="projects">
            <Card.Group className="centered" itemsPerRowid="projects">
                <Card id="project1">
                    <Card.Content>
                        <Card.Header className="titles">{projectData[0].name}</Card.Header>
                        <Card.Content className="prodesc">This program asks questions to the user through the terminal.
                                    The answers are automatically read and made into a proper README.md file for your repo.
                        </Card.Content>
                        <Card.Content className="link" a href="https://github.com/zzurawski/ReadME-Generator">{projectData[0].git}</Card.Content>
                    </Card.Content>
                </Card>
                <Card id="project2">
                    <Card.Content>
                        <Card.Header className="titles">{projectData[1].name}</Card.Header>
                        <Card.Content className="prodesc">SkateSpot demonstrates MERN capabilities with its use of MongoDb, Express, React. </Card.Content>
                        <Card.Content className="link" a href="https://github.com/ReedHMartin/SkateSpotter">{projectData[1].git}</Card.Content>
                    </Card.Content>
                </Card>
                <Card id="project3">
                    <Card.Content>
                        <Card.Header className="titles">{projectData[2].name}</Card.Header>
                        <Card.Content className="prodesc">This project displays use of middleware, APIs, and CRUD capabilities. 
                                    With use of cookies and user authentication, you are able to post, update, delete images of animals up for adoption.</Card.Content>
                        <Card.Content className="link" href="https://github.com/zzurawski/Perfect-Pet">{projectData[2].git}</Card.Content>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}