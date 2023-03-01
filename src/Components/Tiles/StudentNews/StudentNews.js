import logo from "../../../portfolio-images/StudentNews/student-news.png";
import "./StudentNews.css"

function StudentNews() {
  return (
    <div className="student-news">
      <img src={logo} className="student-news-logo" alt="Student News: The University of Chester Student Magazine" />
      <div className="text-overlay">
        <div className="text">
        <h1>Student News</h1>
        <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default StudentNews;
