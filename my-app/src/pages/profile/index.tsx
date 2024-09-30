import { ArrowLeft02Icon, Calendar03Icon } from "hugeicons-react";
import bgImg from "../../assets/20230814_061713.jpg";
import pfp from "../../assets/f6b5ebb25f10f94f20c1240b24b6550a.jpg";
import { Link, Outlet, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="basis-[60%] border-x border-x-gray-500 ">
      <div className="sticky top-0 z-10 flex backdrop-filter backdrop-blur-sm bg-gray-200/70">
        <Link to="/homePage">
        <div className="px-4 py-3 basis-24">
          <ArrowLeft02Icon
            style={{ width: "32px", height: "32px", fontSize: "20px" }}
          />
        </div>
        </Link>
        <div>
          <strong className="text-2xl mb-4">panpan</strong>
          <p className="text-gray-400 pt-2">222 posts</p>
        </div>
      </div>

      <div className="h-72 w-full overflow-hidden">
        <img src={bgImg} alt="bgImg" />
      </div>

      <div className="relative ">
        <div className="absolute left-4 top-[-110px]">
          <img
            src={pfp}
            alt="pfp"
            className="w-48 h-48 rounded-full border-[5px] border-white hover:saturate-50"
          />
        </div>
        <div className="flex justify-end mr-4 mt-4">
          <button className="px-5 rounded-full py-2 text-[18px] hover:bg-gray-200 outline outline-1 outline-gray-400 font-bold ">
            Edit Profile
          </button>
        </div>
      </div>

      <div className=" p-6">
        <div className="mt-6">
          <strong className="text-2xl">panpan</strong>
          <p className="mt-1 text-gray-500 text-[18px]">@panpan_tomato</p>

          <p className="mt-3">karina over anyone</p>
          <div className="mt-3 flex">
            <Calendar03Icon className="text-gray-500" />
            <p className="text-gray-500 ml-2 text-[18px]">
              Joined December 2020
            </p>
          </div>

          <div className="flex mt-4">
            <div className="flex mr-6 hover:border-b-2 hover:border-b-gray-700 hover:cursor-pointer">
              <strong className="mr-2">110</strong>
              <p className="text-gray-500">Followings</p>
            </div>

            <div className="flex hover:border-b-2 hover:cursor-pointer">
              <strong className="mr-2">115</strong>
              <p className="text-gray-500">Followers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 justify-evenly text-center mt-2">
        <Link to="/username">
          <div
            className={`${
              isActive("/username") ? "border-b-4 border-blue-500" : ""
            } hover:cursor-pointer py-3 hover:bg-gray-300`}
          >
            <strong className="text-[18px] text-gray-500 ">Posts</strong>
          </div>
        </Link>

        <Link to="/username/replies">
          <div
            className={`${
              isActive("/username/replies") ? "border-b-4 border-blue-500" : ""
            } hover:cursor-pointer py-3 hover:bg-gray-300`}
          >
            <strong className="text-[18px] text-gray-500 ">Replies</strong>
          </div>
        </Link>

        <Link to="/username/highlights">
          <div
            className={`${
              isActive("/username/highlights") ? "border-b-4 border-blue-500" : ""
            } hover:cursor-pointer py-3 hover:bg-gray-300`}
          >
            <strong className="text-[18px] text-gray-500 ">Highlights</strong>
          </div>
        </Link>

        <Link to="/username/articles">
          <div
            className={`${
              isActive("/username/articles") ? "border-b-4 border-blue-500" : ""
            } hover:cursor-pointer py-3 hover:bg-gray-300`}
          >
            <strong className="text-[18px] text-gray-500 ">Articles</strong>
          </div>
        </Link>

        <Link to="/username/media">
          <div
            className={`${
              isActive("/username/media") ? "border-b-4 border-blue-500" : ""
            } hover:cursor-pointer py-3 hover:bg-gray-300`}
          >
            <strong className="text-[18px] text-gray-500 ">Media</strong>
          </div>
        </Link>

        <Link to="/username/likes">
          <div
            className={`${
              isActive("/username/likes") ? "border-b-4 border-blue-500" : ""
            } hover:cursor-pointer py-3 hover:bg-gray-300`}
          >
            <strong className="text-[18px] text-gray-500 ">Likes</strong>
          </div>
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Profile;
