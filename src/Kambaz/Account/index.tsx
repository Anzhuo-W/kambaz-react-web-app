import Signin from "./Signin.tsx";
import Signup from "./Signup.tsx";
import Profile from "./Profile.tsx";
import { Navigate, Route, Routes } from "react-router";
import AccountNavigation from "./Navigation.tsx";

export default function Account() {
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
                  element={<Navigate to="/Kambaz/Account/Signin" />}
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

//export default function Account() {
//  return (
//    <div>
//      <h2>Account</h2>
//      <Routes>
//        <Route path={"/"} element={<Navigate to={"Signin"}/>}/>
//        <Route path={"Signin"} element={<Signin />} />
//        <Route path={"Signup"} element={<Signup />} />
//        <Route path={"Profile"} element={<Profile />} />
//      </Routes>
//    </div>
//  )
//}
