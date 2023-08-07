import "./FormStyles.css";
import React, { useRef } from 'react';
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3erkhld', 'template_hs6r6mh', form.current, '9GDpCXqzoLHu7vPaO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name"></input>

            <label>Email</label>
            <input type="email"  name="email"></input>

            <label>Subject</label>
            <input type="text"  name="subject"></input>

            <label>Message</label>
            <textarea  name="message" rows="6" placeholder="Type your message here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form;