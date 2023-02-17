import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>Emails</h1>
        <p>
          Here are a few examples of emails I have designed and coded using HTML
          and CSS within Dreamweaver.
        </p>
      </div>
      <div>
        <p>
          Student Shout Out Email - This goes out to all students once a month
          to give them a run down of the goings on inside and outside the
          University. It also gives them tips on how to stay out of trouble and
          get more involved. The idea is to keep more prominent stories at the
          top, using different colours and larger headings/images and any other
          stories have smaller headings, so the email doesn’t appear too long.
        </p>
        <p>
          Alumni Newsletter - An email that is sent out quarterly to update
          Alumni on goings on and how they can continue to engage with the
          University and its current students.
        </p>
      </div>
    </div>
  );
}

export default BirkenheadPage;
