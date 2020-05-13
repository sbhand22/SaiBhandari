import React from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { Formik } from "formik";
import "./ContactForm.css";
import * as Yup from "yup";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  submitHandler = values => {
    this.setState(
      {
        name: values.name,
        email: values.email,
        message: values.message
      },
      () => console.log(this.state)
    );
  };

  render() {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email()
        .required("Email is required"),
      message: Yup.string().required("Message is required")
    });
    return (
      <Formik
        validationSchema={schema}
        onSubmit={values => this.submitHandler(values)}
        initialValues={{
          name: "",
          email: "",
          message: ""
        }}
        render={({
          handleSubmit,
          handleChange,
          values,
          touched,
          isInvalid,
          handleBlur,
          errors
        }) => (
          <Form
            style={{ paddingBottom: "5em" }}
            onSubmit={event => {
              handleSubmit(values);
            }}
          >
            <Form.Field>
              <div>
                <Input
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name && !!touched.name}
                  type="name"
                  onBlur={handleBlur}
                />
              </div>
              {errors.name && touched.name ? (
                <label style={{ color: "red", paddingTop: "1em" }}>
                  {errors.name}
                </label>
              ) : null}
            </Form.Field>
            <Form.Field>
              <div>
                <Input
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email && !!touched.email}
                  type="email"
                  onBlur={handleBlur}
                />
              </div>
              {errors.email && touched.email ? (
                <label style={{ color: "red", paddingTop: "1em" }}>
                  {errors.email}
                </label>
              ) : null}
            </Form.Field>
            <Form.Field>
              <div>
                <Form.TextArea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message && !!touched.message}
                  onBlur={handleBlur}
                  placeholder="Type the message here"
                />
              </div>
              {errors.message && touched.message ? (
                <label style={{ color: "red", paddingTop: "1em" }}>
                  {errors.message}
                </label>
              ) : null}
            </Form.Field>
            <div>
              <Button
                style={{ display: "block", margin: "auto" }}
                type="submit"
                disabled={this.state.buttonDisabled}
              >
                Contact Me
              </Button>
            </div>
          </Form>
        )}
      />
    );
  }
}

export default ContactForm;
