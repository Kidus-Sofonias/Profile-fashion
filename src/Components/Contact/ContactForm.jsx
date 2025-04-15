import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_public_key'
    ).then(
      () => {
        setStatusMessage('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        setStatusMessage('Failed to send. Please try again.');
        console.error('EmailJS error:', error);
      }
    );
  };

  return (
    <div className="container w-75 mt-5">
      <h3>Contact Form</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" name="phone" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {statusMessage && <div className="alert alert-info mt-3">{statusMessage}</div>}
    </div>
  );
};

export default ContactForm;
