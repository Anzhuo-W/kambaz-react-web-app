import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { KambazState } from "../store.ts";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);
  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }
}
