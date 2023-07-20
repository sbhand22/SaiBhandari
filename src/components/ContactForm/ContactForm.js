import React from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";
import axios from "axios";

const ContactForm = () => {
  const submitHandler = (values) => {
    axios
      .post(`https://portfolio-contact-form-98.firebaseio.com/.json`, values)
      .then((_) => {
        toast.success("Done! Will be checking it soon!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((_) => {
        toast.error("Looks like something went wrong!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  return (
    <Formik
      validationSchema={schema}
      enableReinitialize
      onSubmit={(values) => submitHandler(values)}
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        handleBlur,
        errors,
      }) => (
        <Form
          className="ContactFormStyle"
          onSubmit={(_) => {
            handleSubmit(values);
          }}
        >
          <Form.Field>
            <Input
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              type="name"
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <label className="ContactFormLabel">{errors.name}</label>
            ) : null}
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <label className="ContactFormLabel">{errors.email}</label>
            ) : null}
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              className="ContactFormTextArea"
              maxLength="3000"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Type the message here"
            />
            {errors.message && touched.message ? (
              <label className="ContactFormLabel">{errors.message}</label>
            ) : null}
          </Form.Field>
          <Button className="ContactFormButton" type="submit">
            Contact Me
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
