import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.png" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Full Stack Software Development</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2345/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/poker.webp" width={"auto"} height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS2345 Poker</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Games of Chance and Skill</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3456/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/flutes.jpg" width={"auto"} height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS3456 Woodwinds</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Flutes, specifically</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/4567/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/zidane.webp" width={"auto"} height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS4567 Soccer</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Zinedine Zidane's career</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/5678/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/chemistry.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS5678 Chemistry</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Explosions</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/6789/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/totoro.jpg" width={"auto"} height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS6789 Crochet</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Creating Amigurumi</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/7890/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/luffy.jpg" width={"auto"} height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS7890 Anime</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Protagonist Plot Armor</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>

      </div>
    </div>
  );
}
