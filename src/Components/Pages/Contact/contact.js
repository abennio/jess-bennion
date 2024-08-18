import React from "react";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <NavBar />
        <div className="contact-description">
          <h1>Hello</h1>
          <p>
            My name is Jess, I'm a Digital Designer from Chester, UK. I design for print and
            digital, specialising in illustration, motion graphics and web/social media.
            Please click below to send me an email to talk about commissions, enquiries or just a general
            chat.
          </p>
          <button className="contact-button" onClick={() => window.location = 'mailto:jessbennion87@gmail.com'}>Contact Me</button>
        </div>
      <Footer />
    </div>
  );
}

export default Contact;
