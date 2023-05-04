import React from "react";
import {useState} from "react";
import Projects from "./pages/projects"
import Header from "./components/header";
import Navbar from "./pages/nav";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
    const [choice, setPage] = useState("Home");

    const pageSwitch = () => {
      if (choice === "About") {
        return <About />;
      }
      if (choice === "Projects") {
        return <Projects />;
      } 
      else {
        return <Home />
      }
    };

    const selectionChange = (choice) => {
      setPage(choice);
    };
  
    return (
      <div>
        <Header />
        <Navbar selectionChange={selectionChange} />
        {pageSwitch()}
      </div>
    );
  };

export default App;
