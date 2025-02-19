import { Button, Col, Container, Row } from "react-bootstrap";
import { FaBan, FaBell, FaCheckCircle } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { BiImport } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { VscGraph } from "react-icons/vsc";
import { BsMegaphone } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";

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
        <Button variant="primary" className="w-100 text-start">
          <BiImport className="me-2 fs-5" />
          Import Existing Content</Button>
        <Button variant="primary" className="w-100 text-start">
          <LiaFileImportSolid className="me-2 fs-5" />
          Import from Commons</Button>
        <Button variant="primary" className="w-100 text-start">
          <TiHome className="me-2 fs-5"/>
          Choose Home Page</Button>
        <Button variant="primary" className="w-100 text-start">
          <VscGraph className="me-2 fs-5"/>
          View Course Stream</Button>
        <Button variant="primary" className="w-100 text-start">
          <BsMegaphone className="me-2 fs-5"/>
          New Announcement</Button>
        <Button variant="primary" className="w-100 text-start">
          <MdBarChart className="me-2 fs-5"/>
          New Analytics</Button>
        <Button variant="primary" className="w-100 text-start">
          <FaBell className="me-2 fs-5"/>
          View Course Notifications</Button>
      </Container>
    </div>
  );
}
