// Import Style File
import "./about.scss";

// Import Components
import MainHeading from "../main_heading/MainHeading";

// Import Libraries
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Import Animations
import { aboutContainer, aboutWord } from "../../animations";

function About() {
  const text =
    "I'm a Frontend Developer with hands-on experience building modern and responsive web applications using React.js, Next.js, and TypeScript. I’ve built several projects, including a real-time chat application and a React-based e-commerce platform, where I worked on responsive UI, state management, API integration, and performance optimization. I enjoy creating clean and user-friendly interfaces while continuously improving my skills through real-world projects and modern frontend technologies.";

  const words = text.split(" ");

  return (
    <div className="about-me" id="about-me">
      <MainHeading title="Hey" subTitle="there!" />

      <motion.p
        className="description same-text"
        variants={aboutContainer}
        initial="hidden"
        whileInView="visible"
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            variants={aboutWord}
            style={{
              display: "inline-block",
              marginRight: "6px",
            }}
          >
            {w}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}

export default About;
