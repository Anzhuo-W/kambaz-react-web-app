import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function KambazNavigation() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const getNavItem = (path: string) =>
    location.pathname === path ? "bg-white text-danger" : "bg-black text-danger";

  return (
    <div id="wd-kambaz-navigation" style={{ width: 105 }}
         className="list-group rounded-0 position-fixed
       bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
         href="https://www.northeastern.edu/"
         className="list-group-item bg-black border-0 text-center">
        <img src="/images/neu.png" width="75px" alt={"northeastern logo"} /></a><br />
      <Link to="/Kambaz/Account" id="wd-account-link"
            className={`list-group-item text-center border-0 ${getNavItem("/Kambaz/Account")}`}>
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </Link><br />
      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
            className={`list-group-item text-center border-0 ${getNavItem("/Kambaz/Dashboard")}`}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link><br />
      <Link to="/Kambaz/Dashboard" id="wd-course-link"
            className={`list-group-item text-center border-0 ${getNavItem("/Kambaz/Dashboard")}`}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link><br />
      <Link to="/Kambaz/Calendar" id="wd-calendar-link"
            className={`list-group-item text-center border-0 ${getNavItem("/Kambaz/Calendar")}`}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar
      </Link>
      <br />
      <Link to="/Kambaz/Inbox" id="wd-inbox-link"
            className={`list-group-item text-center border-0 ${getNavItem("/Kambaz/Inbox")}`}>
        <FaInbox className="fs-1 text-danger" /> <br />
        Inbox
      </Link>
      <br />
      <Link to="/Labs" id="wd-labs-link"
            className={`list-group-item text-center border-0 ${getNavItem("/Kambaz/Labs")}`}>
        <LiaCogSolid className="fs-1 text-danger" /> <br />
        Labs
      </Link>
      <br />
    </div>
  );
}