import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 3 * 1000);

  return <><button type="submit" onClick={handleLogout}>log out</button></>;
};

export default Logout;