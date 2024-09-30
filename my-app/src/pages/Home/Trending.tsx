import { Search01Icon } from "hugeicons-react";
import Image from "../../assets/react.svg";
import Trends from "./Trends";
import { useLocation } from "react-router-dom";

const Trending = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-[80%] ml-8 border-x border-x-gray-200">
      <div className="sticky top-0 z-10 bg-white">
        <div className="space-y-4  relative group ">
          <Search01Icon className="absolute left-6 top-12 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-blue-700 transition-colors duration-300" />
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="pl-16 text-[20px] placeholder:px-2 text-black w-full placeholder-black rounded-full bg-gray-400 py-4 focus:outline-none focus:ring-2 focus:ring-blue-700 opacity-30 transition-all duration-300"
          />
        </div>
      </div>

      {/* SUBSCRIBE  */}
      <div className="p-3 border rounded-md my-4 space-y-4">
        <strong className=" text-3xl ">Subscribe to Premium</strong>
        <p className="my-2">
          Subscribe to unlock new features and if eligible,receive a share of
          ads revenue.
        </p>
        <button className="py-2 px-6 text-[20px] text-white bg-black  rounded-full">
          Subscribe
        </button>
      </div>

      {/* WHO TO FOLLOW  */}
      <div className="p-3 border rounded-md my-4 space-y-4 h-[300px] overflow-hidden">
        <strong className=" text-2xl ">Who to follow</strong>
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={Image}
              alt="profile"
              className="rounded-full md:w-10 md:h-10"
            />
            <div className="ml-2">
              <strong>MUSINSA</strong>
              <p className=" text-gray-400">@musinaofficial</p>
            </div>
          </div>
          <button className="py-1 px-6 bg-black text-white rounded-full">
            Follow
          </button>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <img
              src={Image}
              alt="profile"
              className="rounded-full md:w-10 md:h-10"
            />
            <div className="ml-2">
              <strong>MUSINSA</strong>
              <p className=" text-gray-400">@musinaofficial</p>
            </div>
          </div>
          <button className="py-1 px-6 bg-black text-white rounded-full">
            Follow
          </button>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <img
              src={Image}
              alt="profile"
              className="rounded-full md:w-10 md:h-10"
            />
            <div className="ml-2">
              <strong>MUSINSA</strong>
              <p className=" text-gray-400">@musinaofficial</p>
            </div>
          </div>
          <button className="px-6 bg-black text-white rounded-full">
            Follow
          </button>
        </div>

        <p className="text-blue-400 text-[20px] pb-3">Show More</p>
      </div>

      {isActive("/explore") ? (
        <div>
          <p className="text-gray-500">Terms of service Privacy Policy Cookie Policy</p>
          <p className="text-gray-500"> MSIV Transparenzangaben Imprint Accessibility</p>
          <p className="text-gray-500">Ads info More... @2024X Corps.</p>
        </div>
      ) : (
        <div className="p-3 border rounded-md my-4 space-y-4">
          <Trends />
        </div>
      )}
    </div>
  );
};

export default Trending;
