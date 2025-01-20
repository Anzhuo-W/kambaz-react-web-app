import {Link} from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr/>
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr/>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link">
            <img src="/images/reactjs.png" alt={"React logo"} width={200}/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Development </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link">
            <img src="/images/poker.webp" alt={"Card table"} width={200}/>
            <div>
              <h5> CS2345 Poker </h5>
              <p className="wd-dashboard-course-title">
                Games of Chance and Skill</p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3456/Home"
                className="wd-dashboard-course-link">
            <img src="/images/flutes.jpg" alt={"Flutes"} width={200}/>
            <div>
              <h5> CS3456 Woodwinds </h5>
              <p className="wd-dashboard-course-title">
                Flutes, specifically </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4567/Home"
                className="wd-dashboard-course-link">
            <img src="/images/zidane.webp" alt={"Zinedine Zidane"} width={200}/>
            <div>
              <h5> CS4567 Soccer </h5>
              <p className="wd-dashboard-course-title">
                Zinedine Zidane's career </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5678/Home"
                className="wd-dashboard-course-link">
            <img src="/images/chemistry.jpg" alt={"Chemical reaction"} width={200}/>
            <div>
              <h5> CS5678 Chemistry </h5>
              <p className="wd-dashboard-course-title">
                Explosions </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6789/Home"
                className="wd-dashboard-course-link">
            <img src="/images/totoro.jpg" alt={"Totoro amigurumi"} width={200}/>
            <div>
              <h5> CS6789 Crochet </h5>
              <p className="wd-dashboard-course-title">
                Creating Amigurumi </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/7890/Home"
                className="wd-dashboard-course-link">
            <img src="/images/luffy.jpg" alt={"Luffy"} width={200}/>
            <div>
              <h5> CS7890 Anime </h5>
              <p className="wd-dashboard-course-title">
                Protagonist Plot Armor </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
