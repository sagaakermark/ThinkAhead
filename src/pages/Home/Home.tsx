import "./Home.css";
import Cloud from "../../cloud.jpg"


function Home() {
  return (
    <div className="content-container">
      <div className="background-img-container">
        <img src={Cloud} className="img-responsive" alt="Clouds in sky" />
      </div>
      <div className="homepage-text-container">
        <div className="flex-container">
          <p className="homepage-text">Think Ahead</p>
          <button className="homepage-btn color-1">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
