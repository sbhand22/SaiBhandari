import React from "react";
import { Button, Form } from "semantic-ui-react";
import { Formik } from "formik";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";
import { Icon } from "semantic-ui-react";

const ContactForm = () => {
  const scheduleMeeting = () => {
    // Replace this with your own functionality
    window.location.href = "https://calendly.com/sbhand22/30min";
  };
  return (
    <Formik>
      {() => (
        <Form
          className="ContactFormStyle"
        >
          <div className="virtualConnect">
            <h2><Icon className="connectIcon" name="talk" /></h2>
            <h2>Want to connect virtually?</h2>
          </div>
          <Button className="ContactFormButton" onClick={scheduleMeeting}>
            When?
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;