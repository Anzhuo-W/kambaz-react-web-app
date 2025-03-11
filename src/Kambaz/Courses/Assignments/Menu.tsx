import { FiSearch } from "react-icons/fi";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { KambazState } from "../../store.ts";
import { useSelector } from "react-redux";

export default function AssignmentMenu() {
  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <div id="wd-assignment-menu">
          <InputGroup className="mb-3" style={{ flex: 1, maxWidth: "300px", marginTop: "18px", marginLeft: "-12px" }}>
            <InputGroup.Text>
              <FiSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search..."
              id="wd-search-assignment"
              style={{ height: "45px" }}
            />
          </InputGroup>
        </div>
        {isFaculty && (
          <>
            <div className="d-flex gap-1">
              <Button variant="danger" size="lg" id="wd-add-assignment">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px", height: "25px" }} />
                Assignment
              </Button>
              <Button variant="primary" size="lg" id="wd-add-assignment-group">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px", height: "25px" }} />
                Group
              </Button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}