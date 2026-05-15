// Import Recat Icons
import { IoMdInformationCircleOutline } from "react-icons/io";

// Import React Hooks
import { useState } from "react";

// Import Libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { BeatLoader } from "react-spinners";

// Import Libaries
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Improt Animations
import { right, field } from "../../animations";

const messageSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().min(10).required("Required"),
  message: Yup.string().min(30).required("Required"),
});

function ContactForm() {
  const [messageState, setMessageState] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: messageSchema,
    onSubmit: async (values) => {
      setIsLoader(true);

      try {
        await emailjs.send("service_l6aez08", "template_i04o6hj", values, {
          publicKey: "MfecL-tolKncfTXDA",
        });

        setIsLoader(false);
        setMessageState("Message sent");
        formik.resetForm();
      } catch (error) {
        console.error("Email sending error:", error);
        setIsLoader(false);
        setMessageState("Message not sent");
      }

      setTimeout(() => setMessageState(""), 5000);
    },
  });

  return (
    <motion.div
      className="contact-form"
      variants={right}
      initial="hidden"
      whileInView="visible"
    >
      <h3 className="title same-title">Send Me a Message</h3>

      <form onSubmit={formik.handleSubmit}>
        {/* NAME */}
        <motion.div
          className="box"
          variants={field}
          initial="hidden"
          whileInView="visible"
        >
          <label className="same-title">
            Your Name <span>*</span>
          </label>

          <div className="input-box">
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.name && formik.errors.name ? "block" : "none",
              }}
            />
          </div>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          className="box"
          variants={field}
          initial="hidden"
          whileInView="visible"
        >
          <label className="same-title">Email *</label>

          <div className="input-box">
            <input type="email" name="email" value={formik.values.email} />
          </div>
        </motion.div>

        {/* SUBJECT */}
        <motion.div
          className="box"
          variants={field}
          initial="hidden"
          whileInView="visible"
        >
          <label className="same-title">Subject *</label>

          <div className="input-box">
            <input type="text" name="subject" value={formik.values.subject} />
          </div>
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          className="box"
          variants={field}
          initial="hidden"
          whileInView="visible"
        >
          <label className="same-title">Message *</label>

          <div className="input-box">
            <textarea name="message" value={formik.values.message} />
          </div>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          className="button"
          type="submit"
          variants={field}
          initial="hidden"
          whileInView="visible"
        >
          {isLoader ? <BeatLoader size={10} /> : "Send Message"}
        </motion.button>
      </form>

      <span
        className={`notify ${
          messageState === "Message not sent" ? "error" : ""
        } ${messageState ? "open" : ""}`}
      >
        {messageState}
      </span>
    </motion.div>
  );
}

export default ContactForm;
