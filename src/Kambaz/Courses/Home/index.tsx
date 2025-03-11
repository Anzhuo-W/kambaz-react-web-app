import Modules from "../Modules";
import CourseStatus from "./Status";
import { KambazState } from "../../store.ts";
import { useSelector } from "react-redux";

export default function Home() {
  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <table id="wd-home">
      <tbody>
      <tr>
        <td valign="top">
          <Modules />
        </td>
        {isFaculty && (
          <>
            <td valign="top">
              <CourseStatus />
            </td>
          </>
        )}
      </tr>
      </tbody>
    </table>
  );
}
