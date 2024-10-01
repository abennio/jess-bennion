import React from "react";
import student from "../../../portfolio-images/Emails/student-shoutout-tile.png";
import "./Emails.css";

function Emails() {
  return (
    <div className="emails">
      <img
        src={student}
        className="emails-image"
        alt="Logo of a megaphone and the words Student Shout Out in a speech bubble"
      />
      <div className="text-overlay">
        <div className="text">
          <h1>Emails</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default Emails;
