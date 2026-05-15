// Import Style File
import "./profile.scss";

// Import Pictures
import picture from "../../assets/picture.png";

// Import Components
import FallingText from "../react_bits/falling_text/FallingText";

// Import React Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

// Import Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Import Data
import { fallingItems } from "../../skills";

// Import Animations
import { fadeUp, socialVariants, buttonVariants } from "../../animations";

function Profile({ mode }) {
  return (
    <div className={`profile ${mode}`}>
      <div className="logo-img">
        <FallingText
          trigger="auto"
          gravity={0.8}
          fontSize="2rem"
          items={fallingItems}
        />

        <div className="picture">
          {" "}
          <img src={picture} alt="picture" />{" "}
        </div>
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        {/* Name */}
        <motion.h2
          className="name same-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Amr Elmasry
        </motion.h2>

        {/* Job Title */}
        <motion.p
          className="job-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Frontend Developer (React.js & Next.js)
        </motion.p>

        {/* Location */}
        <motion.p
          className="location same-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <FaLocationDot className="icon" />
          Mansoura, Egypt
        </motion.p>

        {/* Social Links */}
        <div className="social-links">
          <motion.a
            href="https://github.com/Amr-Elmasry3"
            target="_blank"
            className="link"
          >
            <FaGithub className="icon same-text" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/amr-elmasry66"
            target="_blank"
            className="link"
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
          >
            <FaLinkedin className="icon same-text" />
          </motion.a>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <motion.a
            href={`${window.location.origin}/portfolio/Amr-Elmasry-Resume.pdf`}
            target="_blanck"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
          >
            <button className="button cv">
              <FaDownload className="icon" />

              <span>Download CV</span>
            </button>
          </motion.a>

          <motion.a
            href="#contact-me"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
          >
            <button className="button email">
              <FaEnvelope className="icon" />

              <span>Contact Me</span>
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
