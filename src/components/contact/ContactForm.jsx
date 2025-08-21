// Import React Icons
import { IoMdInformationCircleOutline } from "react-icons/io";

// Import Formik And Yub
import { useFormik } from "formik";
import * as Yup from "yup";

// Import Email Js
import emailjs from "@emailjs/browser";

// Import Loader
import { BeatLoader } from "react-spinners";

const messageSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string()
    .min(10, "The subject must contain at least 10 characters")
    .required("Required"),
  message: Yup.string()
    .min(30, "The message must contain at least 30 characters")
    .required("Required"),
});

// Import Hooks
import { useState } from "react";

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
        console.log("FAILED...", error.text);
        setIsLoader(false);
        setMessageState("Message not sent");
        setTimeout(() => setMessageState(""), 6000);
      }
    },
  });

  return (
    <>
      <div className="contact-form">
        <h3 className="title same-title">Send Me a Message</h3>

        <form onSubmit={formik.handleSubmit}>
          <div className="box">
            <label className="same-title">
              Your Name <span>*</span>
            </label>

            <div
              className={`input-box ${
                formik.touched.name && formik.errors.name ? "error" : null
              }`}
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
          </div>

          <div className="box">
            <label className="same-title">
              Email <span>*</span>
            </label>

            <div
              className={`input-box ${
                formik.touched.email && formik.errors.email ? "error" : null
              }`}
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
                    formik.touched.email && formik.errors.email
                      ? "block"
                      : null,
                }}
              />
            </div>

            {formik.touched.email && formik.errors.email ? (
              <p className="error-message">{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>

          <div className="box">
            <label className="same-title">
              Subject <span>*</span>
            </label>

            <div
              className={`input-box ${
                formik.touched.subject && formik.errors.subject ? "error" : null
              }`}
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
          </div>

          <div className="box">
            <label className="same-title">
              Message <span>*</span>
            </label>

            <div
              className={`input-box ${
                formik.touched.message && formik.errors.message ? "error" : null
              }`}
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
          </div>

          <button
            className="button"
            type="submit"
            style={{ cursor: isLoader ? "wait" : null }}
          >
            {isLoader ? (
              <BeatLoader color="#FFFFFF" size={12} />
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        <span
          className={`notify ${
            messageState === "Message not sent" ? "error" : ""
          } ${messageState !== "" ? "open" : ""}`}
        >
          {messageState}
        </span>
      </div>
    </>
  );
}

export default ContactForm;
