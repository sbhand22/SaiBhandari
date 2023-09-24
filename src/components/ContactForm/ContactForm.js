import React, { useState } from "react";
import { Button, Form, Modal  } from "semantic-ui-react";
import { Formik } from "formik";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";
import { FaCalendarAlt } from "react-icons/fa";
import { Icon } from "semantic-ui-react";

// const ContactForm = () => {
//   const scheduleMeeting = () => {
//     window.location.href = "https://calendly.com/sbhand22/30min";
//   };
//   return (
//     <Formik>
//       {() => (
//         <Form
//           className="ContactFormStyle"
//         >
//           <div className="virtualConnect">
//             {/* <h2><Icon className="connectIcon" name="talk"  style={{ color: '#5a55cc' }} /></h2> */}
//             <h2>Schedule a Meeting</h2>
//           </div>
//           <Button className="ContactFormButton" onClick={scheduleMeeting}>
//             <FaCalendarAlt /> Calendly
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };
const ContactForm = () => {
  const [open, setOpen] = useState(false);

  const scheduleMeeting = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Formik>
      {() => (
        <>
          <Form className="ContactFormStyle">
            <div className="virtualConnect">
              <h2>Schedule a Meeting</h2>
            </div>
            <Button className="ContactFormButton" onClick={scheduleMeeting}>
              <FaCalendarAlt /> Calendly
            </Button>
          </Form>
          <Modal onClose={closeModal} open={open} size="large">
            <Modal.Header>Schedule a Meeting</Modal.Header>
            <Modal.Content>
              <iframe
                src="https://calendly.com/sbhand22/30min"
                width="100%"
                height="600px"
                frameBorder="0"
              ></iframe>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={closeModal}>Close</Button>
            </Modal.Actions>
          </Modal>
        </>
      )}
    </Formik>
  );
};
export default ContactForm;