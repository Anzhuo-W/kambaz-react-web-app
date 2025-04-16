import Signin from "./Signin.tsx";
import Signup from "./Signup.tsx";
import Profile from "./Profile.tsx";
import { Navigate, Route, Routes } from "react-router";
import AccountNavigation from "./Navigation.tsx";
import { useSelector } from "react-redux";
import { KambazState } from "../store.ts";

export default function Account() {
  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);
  return (
    <div id="wd-account-screen">
      <table>
        <tbody>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route
                path="/"
                element={<Navigate to={currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin"} />}
              />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}