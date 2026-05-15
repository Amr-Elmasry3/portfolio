// Import Style File
import "./project_details.scss";

// Improt React Icons
import { IoIosClose } from "react-icons/io";

// Import Libraries
import ReactPlayer from "react-player";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Import Animations
import {
  backdropProjectDetails,
  panelProjectDetails,
  itemProjectDetails,
} from "../../animations";

function ProjectDetails({ project, mode, handleProjectId }) {
  return (
    <motion.div
      className={`project-details ${!project ? "close" : ""} ${mode}`}
      variants={backdropProjectDetails}
      initial="hidden"
      animate={project ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.div
          className="project-details-content"
          variants={panelProjectDetails}
        >
          <div className="scroll scroll-style">
            {/* CLOSE BUTTON */}
            <motion.div
              className="close-box"
              onClick={() => handleProjectId(0)}
              variants={itemProjectDetails}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoIosClose className="icon same-text" />
            </motion.div>

            {project && (
              <>
                {/* VIDEO */}
                <motion.div className="video-box" variants={itemProjectDetails}>
                  <ReactPlayer src={project.video} controls />
                </motion.div>

                {/* TITLE + DESCRIPTION */}
                <motion.div
                  className="details-box"
                  variants={itemProjectDetails}
                >
                  <h3 className="title">{project.title}</h3>

                  <p className="description same-text">{project.description}</p>

                  {/* BASIC FUNCTIONS */}
                  <motion.div
                    className="basic-functions same-box"
                    variants={itemProjectDetails}
                  >
                    <h4 className="same-title">
                      Basics <span>Functions:</span>
                    </h4>

                    <ul className="list">
                      {project.basicFunctions.map((item) => (
                        <li key={item.id}>
                          <span className="dot"></span>
                          <p className="key same-text">
                            {item.key}:{" "}
                            <span className="value">{item.value}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* TECH STACK */}
                  <motion.div
                    className="tech-stack same-box"
                    variants={itemProjectDetails}
                  >
                    <h4 className="same-title">
                      Tech <span>Stack:</span>
                    </h4>

                    <ul className="list">
                      {project.techStack.map((item) => (
                        <li key={item.id}>
                          <span className="dot"></span>
                          <p className="key same-text">
                            {item.key}:{" "}
                            <span className="value">{item.value}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
