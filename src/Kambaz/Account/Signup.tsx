import { Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { User } from "./Signin";
import { v4 as uuidv4 } from "uuid";

export default function Signup() {
  const [user, setUser] = useState<User>({
    _id: uuidv4(),
    username: "",
    password: "",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    dob: "",
    role: "",
    loginId: "LoginId",
    section: "Section",
    lastActivity: "",
    totalActivity: ""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };
  return (
    <div id="wd-signup-screen" className="m-3">
      <h1 className="mb-3">Signup</h1>
      <Form.Control
        id="wd-username"
        placeholder="username"
        className="mb-2" onChange={(e) => setUser({ ...user, username: e.target.value })}/>
      <Form.Control
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
      <Link
        id="wd-signin-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2"
        onClick={signup}>
        Sign up
      </Link><br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}