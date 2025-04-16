import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { KambazState } from "../store.ts";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);
  const courses = useSelector((state: KambazState) => state.coursesReducer.courses);
  const enrollments = useSelector((state: KambazState) => state.enrollmentsReducer.enrollments);

  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  if (currentUser) {
    if (course) {
      const userCourses = courses.filter((course) =>
        enrollments.some(
          (enrollment) =>
            enrollment.user === currentUser?._id &&
            enrollment.course === course._id
        ));

      if (userCourses.includes(course)) {
        return children;
      } else {
        return <Navigate to="/Kambaz/Dashboard" />;
      }
      
    } else {
      return children;
    }

  } else {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }
}
