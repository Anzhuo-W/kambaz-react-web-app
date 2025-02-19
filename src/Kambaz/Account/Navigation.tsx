import { Link } from "react-router-dom";
import { useState } from "react";

export default function AccountNavigation() {
  const [activeId, setActiveId] = useState("wd-account-signin-link");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setActiveId(event.currentTarget.id);
  };

  const getButtonClass = (id: string) =>
    activeId === id ? "list-group-item active border border-0" : "list-group-item text-danger border border-0";

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Account/Signin"
        id="wd-account-signin-link"
        className={getButtonClass("wd-account-signin-link")}
        onClick={handleClick}
      >
        Signin
      </Link>
      <Link
        to="/Kambaz/Account/Signup"
        id="wd-account-signup-link"
        className={getButtonClass("wd-account-signup-link")}
        onClick={handleClick}
      >
        Signup
      </Link>
      <Link
        to="/Kambaz/Account/Profile"
        id="wd-account-profile-link"
        className={getButtonClass("wd-account-profile-link")}
        onClick={handleClick}
      >
        Profile
      </Link>
    </div>
  );
}
