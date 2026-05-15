// Import Style file
import "./skills.scss";

// Import Components
import MainHeading from "../main_heading/MainHeading";

// Import Data
import { mySkills } from "../../skills";

// Import Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Import Animations
import { boxVariantsSkills } from "../../animations";

function Skills({ mode }) {
  return (
    <div className={`my-skills ${mode}`} id="my-skills">
      <MainHeading title="My" subTitle="Skills" />

      <div className="skills-content">
        {mySkills.map((item) => {
          return (
            <motion.div
              className="box"
              key={item.id}
              variants={boxVariantsSkills}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -6,
                scale: 1.05,
              }}
            >
              {item.icon}

              <span className="same-title">{item.skill}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
