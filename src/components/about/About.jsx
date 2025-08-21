// Import Style File
import "./about.scss";

// Import Components
import MainHeading from "../main_heading/MainHeading";

function About() {
  return (
    <div className="about-me" id="about-me">
      <MainHeading title="Hey" subTitle="there!" img="boy" />

      <p className="description same-text">
        I'm thrilled to tell you a bit about myself, I'm Enthusiastic Front-end
        Developer (recent graduate) with a strong understanding of HTML5, CSS3
        and JavaScript. Developed 5+ projects using React.js and Responsive
        Design, including an [e-commerce website] with [real-time cart updates].
        Eager to join a team where I can contribute to building user-friendly
        web applications while expanding my expertise. Committed to learning
        other technologies such as Next.js and TypeScript to stay at the
        forefront of web development.
      </p>
    </div>
  );
}

export default About;
