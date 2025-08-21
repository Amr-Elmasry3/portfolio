// Import Style File
import "./profile.scss";

// Import Pictures
import picture from "../../assets/picture.png";
import lightLogo from "../../assets/light_logo.png";

// Import React Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Profile({ mode }) {
  return (
    <div className={`profile ${mode}`}>
      <div className="logo-img">
        <img src={lightLogo} alt="light_logo" className="logo" />

        <div className="picture">
          <img src={picture} alt="picture" />
        </div>
      </div>

      <div className="profile-info">
        <h2 className="name same-title">Amr Elmasry</h2>
        <p className="job-title">Front End Developer | React Js</p>

        <p className="location same-text">
          <FaLocationDot className="icon" />
          Egypt, DK, Mansoura
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Amr-Elmasry3"
            target="_blank"
            className="link"
          >
            <FaGithub className="icon same-text" />
          </a>

          <a
            href="https://www.linkedin.com/in/amr-elmasry66"
            target="_blank"
            className="link"
          >
            <FaLinkedin className="icon same-text" />
          </a>

          <a href="#" target="_blank" className="link">
            <FaFacebookF className="icon same-text" />
          </a>
        </div>

        <div className="buttons">
          <a
            href={`${window.location.origin}/portfolio/cv.pdf`}
            target="_blanck"
          >
            <button className="button cv">
              <FaDownload className="icon" />

              <span>Download CV</span>
            </button>
          </a>

          <a href="#contact-me">
            <button className="button email">
              <FaEnvelope className="icon" />

              <span>Contact Me</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
