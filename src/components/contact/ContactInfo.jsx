// Import React Icons
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// Import Libaries
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Import Animations
import { item, left } from "../../animations";

function ContactInfo() {
  return (
    <motion.div
      className="contact-info"
      variants={left}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        className="box"
        variants={item}
        initial="hidden"
        whileInView="visible"
      >
        <div className="icon-box">
          <FaEnvelope className="icon" />
        </div>

        <div className="details">
          <span className="key same-title">Email</span>

          <a
            href="mailto:www.amrelmasry66@gmail.com"
            target="_blank"
            className="value same-text"
          >
            www.amrelmasry66@gmail.com
          </a>
        </div>
      </motion.div>

      <motion.div
        className="box"
        variants={item}
        initial="hidden"
        whileInView="visible"
      >
        <div className="icon-box">
          <FaWhatsapp className="icon" />
        </div>

        <div className="details">
          <span className="key same-title">Phone</span>

          <a
            href="https://wa.me/+201026567600"
            target="_blank"
            className="value same-text"
          >
            01026567600
          </a>
        </div>
      </motion.div>

      <motion.div
        className="available"
        variants={item}
        initial="hidden"
        whileInView="visible"
      >
        <p className="active same-title">
          <span></span>Available
        </p>

        <p className="description same-text">
          I'm currently available for freelance work and full-time positions.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default ContactInfo;
