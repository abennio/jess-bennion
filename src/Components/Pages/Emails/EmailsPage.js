import React from "react";
import ach1eve from "../../../portfolio-images/Emails/ach1eve.png";
import alumni from "../../../portfolio-images/Emails/Alumni.png";
import shoutout from "../../../portfolio-images/Emails/student-shout-out.png";
import cestrian from "../../../portfolio-images/Emails/the-cestrian.png";
import "./EmailsPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function EmailsPage() {
  return (
    <div className="emails-page">
      <NavBar />
      <div className="emails-description">
        <h1>Emails</h1>
        <p>
          Here are a few examples of emails I have designed and coded using HTML
          and CSS within Dreamweaver.
        </p>
      </div>
      <div>
        <div className="achieve">
        <img
          src={ach1eve}
          className="achieve-img"
          alt="Achieve, a 1 replaces the i"
        />
          <div className="achieve-text">
            <h2>
              Ach1eve Magazine email
            </h2>
          </div>
        </div>
        <hr></hr>
        <div className="shoutout">
          <div className="shoutout-text">
            <h2>
              Student Shout Out Email
            </h2>
            <p>
              This goes out to all students once a month
              to give them a run down of the goings on inside and outside the
              University. It also gives them tips on how to stay out of trouble and
              get more involved. The idea is to keep more prominent stories at the
              top, using different colours and larger headings/images and any other
              stories have smaller headings, so the email doesn’t appear too long.
            </p>
          </div>
          <div className="scrollable">
            <img
              src={shoutout}
              className="shoutout-img"
              alt="Student Shout Out Email"
            />
          </div>
        </div>
        <hr></hr>
        <div className="alumni">
          <div className="scrollable">
            <img src={alumni} className="alumni-img" alt="Alumni newsletter" />
          </div>
          <div className="alumni-text">
          <h2>
            Alumni Newsletter
          </h2>
          <p>
            An email that is sent out quarterly to update
            Alumni on goings on and how they can continue to engage with the
            University and its current students.
          </p>
          </div>
        </div>
        <hr></hr>
        <div className="cestrian">
          <div className="cestrian-text">
          <h2>Cestrian Newsletter</h2>
          </div>
          <div className="scrollable">
            <img src={cestrian} className="cestrian-img" alt="Cestrian newsletter" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmailsPage;
