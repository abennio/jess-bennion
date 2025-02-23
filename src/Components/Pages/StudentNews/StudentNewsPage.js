import React from "react";
import home from "../../../portfolio-images/StudentNews/Homepage.png";
import image from "../../../portfolio-images/StudentNews/image-asset.png";
import article from "../../../portfolio-images/StudentNews/screencapture-studentnews-chester-ac-uk-national-award-for-student-nurse-for-giving-a-voice-to-others-2021-02-23-19_08_40.png";
import "./StudentNewsPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function StudentNewsPage() {
  return (
    <div className="student-news-page">
      <NavBar />
      <div className="student-news-container">
        <div className="student-news-description">
          <h1>Student News Website</h1>
          <p>
            I worked alongside a Web Developer to build Student News, a website to
            keep Students up-to-date with current University of Chester news
            relevant to students. I designed the website and I also create and
            update all the content.
          </p>
        </div>
        <div className="student-news-images">
          <h2>Homepage</h2>
          <div className="scrollable-news">
            <img
              src={home}
              className="student-news-home"
              alt="Student News webpage design"
            />
          </div>
          <br />
          <hr></hr>
          <h2>Example of an article</h2>
          <div className="scrollable-news">
            <img
              src={image}
              className="student-news-image"
              alt="Student News article example"
            />
          </div>
          <br />
          <hr></hr>
          <h2>Example of another article</h2>
          <div className="scrollable-news">
            <img
              src={article}
              className="student-news-article"
              alt="Student News article example"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentNewsPage;
