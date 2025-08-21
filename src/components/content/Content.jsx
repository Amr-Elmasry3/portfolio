// Import Style File
import "./content.scss";

// Import Components
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

// Import Hooks
import { useContext } from "react";

// Import Page Mode Context
import { PageModeContext } from "../../contexts/PageModeContext";

function Content() {
  const { mode } = useContext(PageModeContext);

  return (
    <div className="content">
      <div className="cover scroll-style">
        <About />

        <Skills mode={mode} />

        <Projects mode={mode} />

        <Contact mode={mode} />
      </div>
    </div>
  );
}

export default Content;
