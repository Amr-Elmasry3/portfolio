// Import Style File
import "./contact.scss";

// Import Components
import MainHeading from "../main_heading/MainHeading";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact({ mode }) {
  return (
    <div className={`contact-me ${mode}`} id="contact-me">
      <MainHeading title="Get" subTitle="In Touch" img="chat" />

      <div className="contact-content">
        <ContactInfo />

        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
