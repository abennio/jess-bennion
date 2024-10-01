import React from "react";
import ShoutOut from "../../../portfolio-images/StudentShoutOut/student-shout-out-tile.png";
import "./StudentShoutOut.css";

function StudentShoutOut() {
  return (
    <div className="student-shout-out">
      <img
        src={ShoutOut}
        className="student-shout-out-logo"
        alt="The words 'Student Shout Out' on their own separate line in white writing with a black block behind each word."
      />
      <div className="text-overlay">
        <div className="text">
          <h1>Student Shout Out</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default StudentShoutOut;
