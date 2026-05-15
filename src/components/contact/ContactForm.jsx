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
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: messageSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      setIsLoader(true);
      try {
        await emailjs.send("service_l6aez08", "template_i04o6hj", values, {
          publicKey: "MfecL-tolKncfTXDA",
        });
        setIsLoader(false);
        setMessageState("Message sent");
        setTimeout(() => setMessageState(""), 6000);
        formik.resetForm();
      } catch (error) {
        console.error("FAILED...", error.text);
        setIsLoader(false);
        setMessageState("Message not sent");
        setTimeout(() => setMessageState(""), 6000);
      }
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

          <div
            className={`input-box ${formik.touched.name && formik.errors.name ? "error" : null}`}
          >
            <input
              type="text"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
              className="same-title"
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.name && formik.errors.name ? "block" : null,
              }}
            />
          </div>

          {formik.touched.name && formik.errors.name ? (
            <p className="error-message">{formik.errors.name}</p>
          ) : (
            ""
          )}
        </motion.div>

        {/* EMAIL */}
        <motion.div
          className="box"
          variants={field}
          initial="hidden"
          whileInView="visible"
        >
          <label className="same-title">Email *</label>

          <div
            className={`input-box ${formik.touched.email && formik.errors.email ? "error" : null}`}
          >
            <input
              type="email"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
              className="same-title"
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.email && formik.errors.email ? "block" : null,
              }}
            />
          </div>

          {formik.touched.email && formik.errors.email ? (
            <p className="error-message">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </motion.div>

        {/* SUBJECT */}
        <motion.div
          className="box"
          variants={field}
          initial="hidden"
          whileInView="visible"
        >
          <label className="same-title">Subject *</label>

          <div
            className={`input-box ${formik.touched.subject && formik.errors.subject ? "error" : null}`}
          >
            <input
              type="text"
              value={formik.values.subject}
              name="subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
              className="same-title"
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.subject && formik.errors.subject
                    ? "block"
                    : null,
              }}
            />
          </div>

          {formik.touched.subject && formik.errors.subject ? (
            <p className="error-message">{formik.errors.subject}</p>
          ) : (
            ""
          )}
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          className="box"
          variants={field}
          initial="hidden"
          whileInView="visible"
        >
          <label className="same-title">Message *</label>

          <div
            className={`input-box ${formik.touched.message && formik.errors.message ? "error" : null}`}
          >
            <textarea
              value={formik.values.message}
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
              className="same-title"
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.message && formik.errors.message
                    ? "block"
                    : null,
              }}
            />
          </div>

          {formik.touched.message && formik.errors.message ? (
            <p className="error-message">{formik.errors.message}</p>
          ) : (
            ""
          )}
        </motion.div>

        {/* BUTTON */}
        <motion.button
          className="button"
          type="submit"
          style={{ cursor: isLoader ? "wait" : null }}
          variants={field}
          initial="hidden"
          whileInView="visible"
        >
          {isLoader ? <BeatLoader color="#FFFFFF" size={12} /> : "Send Message"}
        </motion.button>
      </form>

      <span
        className={`notify ${messageState === "Message not sent" ? "error" : ""} ${messageState !== "" ? "open" : ""}`}
      >
        {" "}
        {messageState}{" "}
      </span>
    </motion.div>
  );
}

export default ContactForm;
