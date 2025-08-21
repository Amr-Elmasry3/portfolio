// import Style File
import "./projects.scss";

// Import Components
import MainHeading from "../main_heading/MainHeading";
import ProjectDetails from "../project_details/ProjectDetails";

// Import Data
import { projects } from "../../Data";

// Import React icons
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

// Import Hooks
import { useState } from "react";

function Projects({ mode }) {
  const [projectId, setProjecttId] = useState(0);

  const handleProjectId = (id) => {
    setProjecttId(id);
  };

  return (
    <div className={`my-projects ${mode}`} id="my-projects">
      <MainHeading title="My" subTitle="Projects" img="rocket" />

      <div className="my-projects-content">
        {projects.map((item) => {
          return (
            <div className="project" key={item.id}>
              <div className="img-box">
                <img src={item.images[0]} alt={`img${item.id}...`} />

                <div className="some-details">
                  <h4 className="title">{item.title}</h4>

                  <p className="description">{item.description}</p>
                </div>

                <div className="actions">
                  <a href={item.github} className="icon-box" target="_blanck">
                    <FaGithub className="icon" />

                    <span>Code</span>
                  </a>

                  <a href={item.demo} className="icon-box" target="_blanck">
                    <RiShareBoxLine className="icon" />

                    <span>Demo</span>
                  </a>
                </div>
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
                  {item.technicals.slice(0, 3).map((skill, index) => {
                    return (
                      <span className="skill same-text" key={item.id + index}>
                        {skill}
                      </span>
                    );
                  })}

                  {item.technicals.length - 3 ? (
                    <span className="same-text">
                      +{item.technicals.length - 3}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {item.badge ? <span className="badge">{item.badge}</span> : ""}
            </div>
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
