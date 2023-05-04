import React, {useState} from "react";
import "../components/nav.css";

function InternalLink(props) {
  const { content, goTo, doWhat } = props;
  return (
    <>
      <li className="nav-item" onClick={doWhat}>
        <a className="nav-link" href={goTo}>
          {content}
        </a>
      </li>
    </>
  );
}

export default function Nav({ selectionChange }) {
  const links = ["About", "Projects", "Home"];
  return (
    <nav className="nav">
      <ul className="navbar-nav a">
        {links.map((link) => (
          <InternalLink
            key={link}
            content={link}
            goTo={`#${link}`}
            doWhat={() => selectionChange(link)}
            
          />
        ))}
      </ul>
    </nav>
  );
}