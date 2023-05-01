import React from "react";
import {Menu} from "semantic-ui-react"
import { Link } from "react-router-dom";

export default function navBar() {

    return (
        <div className="nav">
          <Menu className="nav" fluid widths={4}>
            <Menu.Item
              name="Home"
              active={activeItem === "Home"}
              onClick={handleItemClick}
              as={Link}
              to="/"
              id="home"
            />
            <Menu.Item
                name="Projects"
                active={activeItem === "Projects"}
                onClick={handleItemClick}
                as={Link}
                to="/projects"
                id="projects"
            />
            <Menu.Item
                name="About"
                active={activeItem === "About"}
                onClick={handleItemClick}
                as={Link}
                to="/about"
                id="about"
            />
            </Menu>
        </div>
      )
    }
 