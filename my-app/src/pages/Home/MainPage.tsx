import Trending from "./Trending";
import { Outlet, useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="basis-[90%] overflow-auto no-scrollbar h-screen">
      <div className="flex">
        <Outlet />
        {isActive("/message") ? (
          <div></div>
        ) : (
          <div className="basis-[40%] h-full border-x-gray-500">
            <Trending />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;

{
  /* <Trending/> */
}
