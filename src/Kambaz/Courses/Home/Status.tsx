import { Button, Col, Container, Row } from "react-bootstrap";
import { FaBan, FaCheckCircle } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <Container className="d-flex flex-column gap-2" style={{ width: "280px" }}>
        <h2>Course Status</h2> <br />
        <Row className="gx-2">
          <Col>
            <Button variant="secondary" className="w-100">
              <FaBan /> Unpublish</Button>
          </Col>
          <Col>
            <Button variant="success" className="w-100">
              <FaCheckCircle /> Publish</Button>
          </Col>
        </Row>
        <Button variant="primary" className="w-100 text-start">Import Existing Content</Button>
        <Button variant="primary" className="w-100 text-start">Import from Commons</Button>
        <Button variant="primary" className="w-100 text-start">Choose Home Page</Button>
        <Button variant="primary" className="w-100 text-start">View Course Stream</Button>
        <Button variant="primary" className="w-100 text-start">New Announcement</Button>
        <Button variant="primary" className="w-100 text-start">New Analytics</Button>
        <Button variant="primary" className="w-100 text-start">View Course Notifications</Button>
      </Container>
    </div>
  );
}
