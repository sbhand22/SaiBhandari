import React from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  submitHandler = (values) => {
    this.setState(
      {
        name: values.name,
        email: values.email,
        message: values.message,
      },
      () => console.log(this.state)
    );
  };

  render() {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      message: Yup.string().required("Message is required"),
    });
    return (
      <Formik
        validationSchema={schema}
        onSubmit={(values) => this.submitHandler(values)}
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        render={({
          handleSubmit,
          handleChange,
          values,
          touched,
          isInvalid,
          handleBlur,
          errors,
        }) => (
          <Form
            className="ContactFormStyle"
            onSubmit={(event) => {
              handleSubmit(values);
            }}
          >
            <Form.Field>
              <Input
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name && !!touched.name}
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
                isInvalid={!!errors.email && !!touched.email}
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
                maxlength="1500"
                name="message"
                value={values.message}
                onChange={handleChange}
                isInvalid={!!errors.message && !!touched.message}
                onBlur={handleBlur}
                placeholder="Type the message here"
              />
              {errors.message && touched.message ? (
                <label className="ContactFormLabel">{errors.message}</label>
              ) : null}
            </Form.Field>
            <Button
              className="ContactFormButton"
              type="submit"
              disabled={this.state.buttonDisabled}
            >
              Contact Me
            </Button>
          </Form>
        )}
      />
    );
  }
}

export default ContactForm;
