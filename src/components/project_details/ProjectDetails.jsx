// Import Style File
import "./project_details.scss";

// Import React Icons
import { IoIosClose } from "react-icons/io";

// Import React Player
import ReactPlayer from "react-player";

function ProjectDetails({ project, mode, handleProjectId }) {
  return (
    <div className={`project-details ${!project ? "close" : ""} ${mode}`}>
      <div className="container">
        <div className="project-details-content">
          <div className="scroll scroll-style">
            <div
              className="close-box"
              onClick={() => {
                handleProjectId(0);
              }}
            >
              <IoIosClose className="icon same-text" />
            </div>

            {project ? (
              <>
                <div className="video-box">
                  <ReactPlayer src={project.video} controls />
                </div>

                <div className="details-box">
                  <h3 className="title">{project.title}</h3>

                  <p className="description same-text">{project.description}</p>

                  <div className="basic-functions same-box">
                    <h4 className="same-title">
                      Basics <span>Functions:</span>
                    </h4>

                    <ul className="list">
                      {project.basicFunctions.map((item) => {
                        return (
                          <li key={item.id}>
                            <span className="dot"></span>

                            <p className="key same-text">
                              {item.key}:{" "}
                              <span className="value">{item.value}</span>
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="tech-stack same-box">
                    <h4 className="same-title">
                      Tech <span>Stack:</span>
                    </h4>

                    <ul className="list">
                      {project.techStack.map((item) => {
                        return (
                          <li key={item.id}>
                            <span className="dot"></span>

                            <p className="key same-text">
                              {item.key}:{" "}
                              <span className="value">{item.value}</span>
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
