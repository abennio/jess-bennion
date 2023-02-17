import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>Cheshire West and Cheshire</h1>
        <p>
          The University worked with Cheshire West and Chester Council to create
          videos for students. These were to make students aware of recycling
          and where you can find information if you’re unsure of what to do with
          an item you want to get rid of. The videos were shown on the
          University of Chester and Cheshire West and Chester’s social media
          accounts.
        </p>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pkY6W6RMq3c"
          title="Cheshire West and Chester Council Video 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Tt5JGdae8IU"
          title="Cheshire West and Chester Council Video 2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9tcMjeTWIqI"
          title="Cheshire West and Chester Council Video 3"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default BirkenheadPage;
