import {
  NewTwitterIcon,
  Search01Icon,
  Notification02Icon,
  UserGroupIcon,
  UserIcon,
  MoreHorizontalCircle02Icon,
  Home09Icon,
  Mail01Icon,
} from "hugeicons-react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div>
      <div className="mr-6">
        <div className="font-bold py-4 mb-6 ml-3">
          {" "}
          <NewTwitterIcon style={{ width: "34px", height: "34px" }} />
        </div>
        <ul className="">
          <li
            className="mb-5 hover:bg-gray-200 p-3 hover:rounded-full"
            title="Home"
          >
            <Link to="/homePage">
              <div className="">
                <Home09Icon
                  style={{ width: "34px", height: "34px" }}
                  className={`${
                    isActive("/") || isActive("/homePage")
                      ? "text-blue-400"
                      : ""
                  }`}
                />
              </div>
            </Link>
          </li>

          <li
            className="mb-5 hover:bg-gray-200 p-3 hover:rounded-full"
            title="Search"
          >
            <Link to="/explore">
              <div className="">
                <Search01Icon
                  style={{ width: "34px", height: "34px" }}
                  className={`${isActive("/explore") ? "text-blue-400" : ""}`}
                />
              </div>
            </Link>
          </li>

          <li
            className="mb-5 hover:bg-gray-200 p-3 hover:rounded-full"
            title="Notification"
          >
            <Link to="/notification">
              <div className="">
                <Notification02Icon
                  style={{ width: "34px", height: "34px" }}
                  className={`${
                    isActive("/notification") ? "text-blue-400" : ""
                  }`}
                />
              </div>
            </Link>
          </li>

          <li
            className="mb-5 hover:bg-gray-200 p-3 hover:rounded-full"
            title="Message"
          >
            <Link to="/message">
              <div className="">
                <Mail01Icon
                  style={{ width: "34px", height: "34px" }}
                  className={`${isActive("/message") ? "text-blue-400" : ""}`}
                />
              </div>
            </Link>
          </li>
          
          <li
            className="mb-5 hover:bg-gray-200 p-3 hover:rounded-full"
            title="Communities"
          >
            <Link to="/community">
              <div className="">
                <UserGroupIcon
                  style={{ width: "34px", height: "34px" }}
                  className={`${isActive("/community") ? "text-blue-400" : ""}`}
                />
              </div>
            </Link>
          </li>

          <li
            className="mb-5 hover:bg-gray-200 p-3 hover:rounded-full"
            title="Profile"
          >
            <Link to="/username">
              <div className="">
                <UserIcon
                  style={{ width: "34px", height: "34px" }}
                  className={`${isActive("/username") ? "text-blue-400" : ""}`}
                />
              </div>
            </Link>
          </li>

          <li
            className="hover:bg-gray-200 p-3 hover:rounded-full "
            title="More"
          >
            <MoreHorizontalCircle02Icon
              style={{ width: "34px", height: "34px" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
