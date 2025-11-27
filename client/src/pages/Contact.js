import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.fullname}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullname}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:faizanmaqbool046@gmail.com?subject=${subject}&body=${body}`;
  };

  const isFormValid = formData.fullname.trim() && 
                     formData.email.trim() && 
                     formData.message.trim();

  return (
    <motion.article
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13277.875855095442!2d72.9573238!3d33.6692807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9512a7d7c58b%3A0x64edb6c6b1f7c4b3!2sE-16%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721370250911!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <p className="contact-helper">
          Fill in the form and your default email app will open with the details pre-filled so you can send the message directly.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Open Email App</span>
          </button>
        </form>
      </section>
    </motion.article>
  );
};

export default Contact;

