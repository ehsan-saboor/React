import React from 'react'
import "./contact.css"
import { MdEmail } from "react-icons/md"
import { BsWhatsapp, BsMessenger } from "react-icons/bs"
import { useRef } from 'react'
import emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qutxndk', 'template_dcrqaed', form.current, 'z3zOG0BRyt0VCAM2k')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>ehsansaboor@gmail.com</h5>
            <a href="mailto:ehsansaboor@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsap</h4>
            <h5>041-0000000000</h5>
            <a href="https://whatsapp.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>Ehsan</h5>
            <a href="https://www.messenger.com/" target="_blank">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact