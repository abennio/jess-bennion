import React from "react";
import ach1eve from "../../../portfolio-images/Emails/ach1eve.png";
import alumni from "../../../portfolio-images/Emails/Alumni.png";
import shoutout from "../../../portfolio-images/Emails/student-shout-out.png";
import cestrian from "../../../portfolio-images/Emails/the-cestrian.png";
import "./EmailsPage.css";
import NavBar from "../../Navbar/navbar";


function EmailsPage() {
  return (
    <div className="emails-page">
      <NavBar />
      <img
        src={ach1eve}
        className="ach1eve"
        alt="Achieve, a 1 replaces the i"
      />
      <div>
        <h1>Emails</h1>
        <p>
          Here are a few examples of emails I have designed and coded using HTML
          and CSS within Dreamweaver.
        </p>
      </div>
      <div>
        <img
          src={shoutout}
          className="shoutout"
          alt="Student Shout Out Email"
        />
        <p>
          Student Shout Out Email - This goes out to all students once a month
          to give them a run down of the goings on inside and outside the
          University. It also gives them tips on how to stay out of trouble and
          get more involved. The idea is to keep more prominent stories at the
          top, using different colours and larger headings/images and any other
          stories have smaller headings, so the email doesn’t appear too long.
        </p>
        <img src={alumni} className="alumni" alt="Alumni newsletter" />
        <p>
          Alumni Newsletter - An email that is sent out quarterly to update
          Alumni on goings on and how they can continue to engage with the
          University and its current students.
        </p>
        <img src={cestrian} className="cestrian" alt="Cestrian newsletter" />
        <p>Cestrian Newsletter</p>
      </div>
    </div>
  );
}

export default EmailsPage;
