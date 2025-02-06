import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function KambazNavigation() {
  const [activeId, setActiveId] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setActiveId(event.currentTarget.id);
  };

  const getNavItemClass = (id:string) =>
    activeId === id ? "bg-white text-danger" : "bg-black text-danger";

  return (
    <div id="wd-kambaz-navigation" style={{ width: 105 }}
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
         href="https://www.northeastern.edu/"
         className="list-group-item bg-black border-0 text-center">
        <img src="/images/neu.png" width="75px" alt={"northeastern logo"} /></a><br />
      <Link to="/Kambaz/Account"
            id="wd-account-link"
            onClick={handleClick}
            className={`list-group-item text-center border-0 ${getNavItemClass("wd-account-link")}`}>
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </Link><br />
      <Link to="/Kambaz/Dashboard"
            id="wd-dashboard-link"
            onClick={handleClick}
            className={`list-group-item text-center border-0 ${getNavItemClass("wd-dashboard-link")}`}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link><br />
      <Link to="/Kambaz/Dashboard/"
            id="wd-course-link"
            onClick={handleClick}
            className={`list-group-item text-center border-0 ${getNavItemClass("wd-course-link")}`}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link><br />
      <Link to="/Kambaz/Calendar"
            id="wd-calendar-link"
            onClick={handleClick}
            className={`list-group-item text-center border-0 ${getNavItemClass("wd-calendar-link")}`}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar
      </Link>
      <br />
      <Link to="/Kambaz/Inbox"
            id="wd-inbox-link"
            onClick={handleClick}
            className={`list-group-item text-center border-0 ${getNavItemClass("wd-inbox-link")}`}>
        <FaInbox className="fs-1 text-danger" /> <br />
        Inbox
      </Link>
      <br />
      <Link to="/Labs"
            id="wd-labs-link"
            onClick={handleClick}
            className={`list-group-item text-center border-0 ${getNavItemClass("wd-labs-link")}`}>
        <LiaCogSolid className="fs-1 text-danger" /> <br />
        Labs
      </Link>
      <br />
    </div>
  );
}