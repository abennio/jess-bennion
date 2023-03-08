import home from "../../../portfolio-images/StudentNews/Homepage.png";
import image from "../../../portfolio-images/StudentNews/image-asset.png";
import article from "../../../portfolio-images/StudentNews/screencapture-studentnews-chester-ac-uk-national-award-for-student-nurse-for-giving-a-voice-to-others-2021-02-23-19_08_40.png";
import "./StudentNewsPage.css";

function StudentNewsPage() {
  return (
    <div className="student-news-page">
      <div>
        <h1>Student News Website</h1>
        <p>
          I worked alongside a Web Developer to build Student News, a website to
          keep Students up-to-date with current University of Chester news
          relevant to students. I designed the website and I also create and
          update all the content.
        </p>
      </div>
      <div>
        <img
          src={home}
          className="student-news-home"
          alt="Student News webpage design"
        />
        <p>Homepage</p>
        <img
          src={image}
          className="student-news-image"
          alt="Student News article example"
        />
        <p>Example of an article</p>
        <img
          src={article}
          className="student-news-article"
          alt="Student News article example"
        />
        <p>Example of an article</p>
      </div>
    </div>
  );
}

export default StudentNewsPage;
