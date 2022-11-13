import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_epkoqgg",
      "template_73si7iq",
      form.current,
      "bq2_9Z1Yil1VDN4PN"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ujjalroy7862@gmail.com</h5>
            <a href="mailto:ujjalroy7862@gmail.com" target="blank">
              Send a Email
            </a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Ujjal Roy Messenger</h5>
            <a href="https://m.me/ujjal.roy.7862" target="blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whats App</h4>
            <h5>01871687138</h5>
            <a
              href="https://web.whatsapp.com/send?phone+8801871687138"
              target="blank"
            >
              Send a What'sApp Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Valid Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="PLease Write Your Details Message to me"
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
