import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function PrivateRoute({ children }) {
  const key = sessionStorage.getItem("login-key") || null;
  const navigate = useNavigate();
  console.log("key", key);

  useEffect(() => {}, [key]);

  if (!key) {
    return navigate("/");
  }

  return children;
}
