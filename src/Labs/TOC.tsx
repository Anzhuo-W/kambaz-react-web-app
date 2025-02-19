import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router";
export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="#/Labs">Labs Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab3">Lab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/Anzhuo-W">My GitHub</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id={"wd-github"} href="https://github.com/Anzhuo-W/kambaz-react-web-app">This Repo</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
