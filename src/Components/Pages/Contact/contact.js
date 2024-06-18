import React from "react";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";

function Contact() {
  return (
    <div className="contact">
      <NavBar />
      <div className="description">
        <h1>Hello</h1>
        <p>
          My name is Jess, I am from Chester in the UK. I design for print and
          digital, specialising in illustration, motion graphics and digital.
          Please fill in the form for commissions, enquiries or just a general
          chat.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
