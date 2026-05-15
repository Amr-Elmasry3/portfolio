// import Style File
import "./projects.scss";

// Import Components
import MainHeading from "../main_heading/MainHeading";
import ProjectDetails from "../project_details/ProjectDetails";

// Import Data
import { projects } from "../../Data";
import { allSkills } from "../../skills";

// Import React icons
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

// Import Hooks
import { useState } from "react";

// Import Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Import Animations
import { boxVariantsProjects } from "../../animations";

function Projects({ mode }) {
  const [projectId, setProjecttId] = useState(0);

  const handleProjectId = (id) => {
    setProjecttId(id);
  };

  return (
    <div className={`my-projects ${mode}`} id="my-projects">
      <MainHeading title="My" subTitle="Projects" />

      <div className="my-projects-content">
        {projects.map((item) => {
          return (
            <motion.div
              className="project"
              key={item.id}
              variants={boxVariantsProjects}
              initial={{
                opacity: 0,
                x: item.id % 2 === 0 ? 80 : -80,
                filter: "blur(7px)",
              }}
              whileInView="visible"
            >
              <div className="img-box">
                <img src={item.images[0]} alt={`img${item.id}...`} />
              </div>

              <div className="details">
                <h4
                  className="title"
                  onClick={() => {
                    handleProjectId(item.id);
                  }}
                >
                  {item.title}
                </h4>

                <div className="skills">
                  {item.technicals.map((skill, index) => {
                    return (
                      <div className="skill same-text" key={item.id + index}>
                        {allSkills[skill]}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="actions">
                <a href={item.demo} className="icon-box" target="_blanck">
                  <RiShareBoxLine className="icon" />

                  <span>Demo</span>
                </a>

                <a href={item.github} className="icon-box" target="_blanck">
                  <FaGithub className="icon" />

                  <span>Code</span>
                </a>
              </div>

              {item.badge ? <span className="badge">{item.badge}</span> : ""}
            </motion.div>
          );
        })}
      </div>

      <ProjectDetails
        project={projectId ? projects[projectId - 1] : null}
        mode={mode}
        handleProjectId={handleProjectId}
      />
    </div>
  );
}

export default Projects;
