import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="m-3">
      <h1 className="mb-3">Profile</h1>
      <Form.Control
        defaultValue="alice"
        placeholder="username"
        className="wd-username mb-2"
      />
      <Form.Control
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password mb-2"
      />
      <Form.Control
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2"
      />
      <Form.Control
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2"
      />
      <Form.Control
        type="date"
        id="wd-dob"
        className="mb-2"
      />
      <Form.Control
        defaultValue="alice@wonderland.com"
        type="email"
        id="wd-email"
        className="mb-2"
      />
      <Form.Select defaultValue="USER" id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Link
        to="/Kambaz/Account/Signin"
        className="btn btn-danger text-white w-100 mb-2"
      >
        Sign out
      </Link>
    </div>
  );
}
