import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { Button, FormControl } from "react-bootstrap";
import * as client from "./client";

export type User = {
  _id: string,
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string,
  dob: string,
  role: string,
  loginId: string,
  section: string,
  lastActivity: string,
  totalActivity: string
}

export type Credential = {
  username: string,
  password: string
}

export default function Signin() {
  const [credentials, setCredentials] = useState<Credential>({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signin-screen" className="m-3">
      <h1 className="mb-3">Sign in</h1>
      <FormControl defaultValue={credentials.username}
                   onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                   className="mb-2" placeholder="username" id="wd-username" />
      <FormControl defaultValue={credentials.password}
                   onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                   className="mb-2" placeholder="password" type="password" id="wd-password" />
      <Button onClick={signin} id="wd-signin-btn" className="w-100 mb-2"> Sign in </Button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup"> Sign up </Link>
    </div>
  );
}