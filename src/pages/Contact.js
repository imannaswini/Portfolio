import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // 👈 importing icons

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i6hbiza', 'template_oufz8dx', form.current, 'WtbADA-ZWYMHlCpy8')
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
          });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Try again.', {
            position: 'top-right',
          });
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="fullName" placeholder="Full Name" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <input type="number" name="age" placeholder="Age" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-links">
        <p>
          <FaEnvelope style={{ marginRight: '8px', color: '#00bfff' }} />
          <a href="mailto:iammannaswini@gmail.com" target="_blank" rel="noopener noreferrer">
            iammannaswini@gmail.com
          </a>
        </p>
        <p>
          <FaLinkedin style={{ marginRight: '8px', color: '#0077b5' }} />
          <a
            href="https://www.linkedin.com/in/mannaswini-p-a-4b4343291"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mannaswini P.A.
          </a>
        </p>
        <p>
          <FaGithub style={{ marginRight: '8px', color: '#f5f5f5' }} />
          <a
            href="https://github.com/imannaswini"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/imannaswini
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
