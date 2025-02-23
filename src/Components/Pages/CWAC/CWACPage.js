import React from "react";
import "./CWACPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function CWACPage() {
  return (
    <div className="cwac-page">
      <NavBar />
      <div className="cwac-container">
        <div className="cwac-description">
          <h1>Cheshire West and Cheshire</h1>
          <br></br>
          <p>
            The University worked with Cheshire West and Chester Council to create
            videos for students. These were to make students aware of recycling
            and where you can find information if you’re unsure of what to do with
            an item you want to get rid of. The videos were shown on the
            University of Chester and Cheshire West and Chester’s social media
            accounts.
          </p>
        </div>
        <br></br>
        <div className="row-videos">
            <iframe
              className="cwac-video-1"
              width="560"
              height="560"
              src="https://www.youtube.com/embed/pkY6W6RMq3c"
              title="Cheshire West and Chester Council Video 1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              className="cwac-video-2"
              width="560"
              height="560"
              src="https://www.youtube.com/embed/Tt5JGdae8IU"
              title="Cheshire West and Chester Council Video 2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <br></br>
            <iframe
              className="cwac-video-3"
              width="560"
              height="560"
              src="https://www.youtube.com/embed/9tcMjeTWIqI"
              title="Cheshire West and Chester Council Video 3"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default CWACPage;
