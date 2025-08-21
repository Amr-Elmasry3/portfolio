//  Import React Icons
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="box">
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
      </div>

      <div className="box">
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
      </div>

      <div className="available">
        <p className="active same-title">
          <span></span>Available
        </p>

        <p className="description same-text">
          I'm currently available for freelance work and full-time positions.
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
