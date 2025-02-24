import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

export default function QuizMenu() {
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <div id="wd-quiz-menu">
          <InputGroup className="mb-3" style={{ flex: 1, maxWidth: "300px", marginTop: "18px", marginLeft: "-12px" }}>
            <InputGroup.Text>
              <FiSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search..."
              id="wd-search-quiz"
              style={{ height: "45px" }}
            />
          </InputGroup>
        </div>
        <div className="d-flex gap-1">
          <Button variant="danger" size="lg" id="wd-add-quiz">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px", height: "25px" }} />
            Quiz
          </Button>
        </div>
      </div>
    </Container>
  );
}