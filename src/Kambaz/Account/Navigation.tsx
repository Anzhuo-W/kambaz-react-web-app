import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { KambazState } from "../store.ts";

export default function AccountNavigation() {
  const [activeId, setActiveId] = useState("wd-account-signin-link");
  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setActiveId(event.currentTarget.id);
  };

  const getButtonClass = (id: string) =>
    activeId === id ? "list-group-item active border border-0" : "list-group-item text-danger border border-0";

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.toLowerCase()}
          to={`/Kambaz/Account/${link}`}
          id={`wd-account-${link.toLowerCase()}-link`}
          className={getButtonClass(`wd-account-${link.toLowerCase()}-link`)}
          onClick={handleClick}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
