import { ArrowLeft02Icon, Search01Icon, Settings01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";
import aespa from "../../assets/explore/20210925_214346.jpg";
import { useState } from "react";
import Trends from "./Trends";

const Explore = () => {
  const isActive = (path: string) => location.pathname === path;
  const [click, setClick] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className="basis-[60%] ">
      {/* STICKY TOP BAR  */}
      <div className="sticky top-0 z-10 backdrop:filter backdrop-blur-sm bg-white bg-opacity-90">
        <div className="grid grid-cols-5">
          
          {click ? (
            <div className="space-y-4   group col-span-4 ml-5" >
              <div className="flex">
                <div className="basis-1/4">
                  <div className="px-4 py-3 basis-24 mt-4 cursor-pointer" onClick={()=>setClick(!click)}>
                    <ArrowLeft02Icon
                      style={{
                        width: "32px",
                        height: "32px",
                        fontSize: "20px",
                      }}
                    />
                  </div>
                </div>
                <div className="basis-3/4 mt-3 relative">
                  <Search01Icon className="absolute left-6 top-8 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-blue-700 transition-colors duration-300" />
                  <input
                    onFocus={()=>setFocus(!focus)}
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="pl-16 text-[20px] placeholder:px-2 text-black w-full placeholder-black rounded-full bg-gray-400 py-4 focus:outline-none focus:ring-2 focus:ring-blue-700 opacity-30 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4  relative group col-span-4 ml-5" onClick={()=>setClick(!click)}>
            <Search01Icon className="absolute left-6 top-12 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-blue-700 transition-colors duration-300" />
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="pl-16 text-[20px] placeholder:px-2 text-black w-full placeholder-black rounded-full bg-gray-400 py-4 focus:outline-none focus:ring-2 focus:ring-blue-700 opacity-30 transition-all duration-300"
            />
          </div>
          )}

          <div className="mt-4 flex justify-end col-span-1 mx-5 items-center ">
            <div className="hover:rounded-full hover:bg-gray-200 p-3">
              <Settings01Icon />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 justify-evenly text-center mt-2 font-serif ">
          <Link to="/explore/tab/forYou">
            <div
              className={`${
                isActive("/explore") || isActive("/explore/tab/forYou")
                  ? "border-b-4 border-blue-500 text-black font-bold"
                  : "text-gray-500 "
              } hover:cursor-pointer py-6 hover:bg-gray-300`}
            >
              <strong className="text-[18px]">For You</strong>
            </div>
          </Link>

          <Link to="/explore/tab/trending">
            <div
              className={`${
                isActive("/explore/tab/trending")
                  ? "border-b-4 border-blue-500"
                  : ""
              } hover:cursor-pointer py-6 hover:bg-gray-300`}
            >
              <strong className="text-[18px] text-gray-500 ">Trending</strong>
            </div>
          </Link>

          <Link to="/explore/tab/news">
            <div
              className={`${
                isActive("/explore/tab/news")
                  ? "border-b-4 border-blue-500"
                  : ""
              } hover:cursor-pointer py-6 hover:bg-gray-300`}
            >
              <strong className="text-[18px] text-gray-500 ">News</strong>
            </div>
          </Link>

          <Link to="/explore/tab/sport">
            <div
              className={`${
                isActive("/explore/tab/sport")
                  ? "border-b-4 border-blue-500"
                  : ""
              } hover:cursor-pointer py-6 hover:bg-gray-300`}
            >
              <strong className="text-[18px] text-gray-500 ">Sports</strong>
            </div>
          </Link>

          <Link to="/explore/tab/entertainment">
            <div
              className={`${
                isActive("/explore/tab/entertainment")
                  ? "border-b-4 border-blue-500"
                  : ""
              } hover:cursor-pointer py-6 hover:bg-gray-300`}
            >
              <strong className="text-[18px] text-gray-500 ">
                Entertainments
              </strong>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-1 relative">
        <img src={aespa} alt="aespa" />
        <div className="absolute bottom-4 left-4">
          <p className="text-3xl text-white">
            aespa "SAVAGE" Music Video Premiere
          </p>
          <p className="text-white mt-2">Music Video. Last Night</p>
        </div>
      </div>

      {/* TRENDS FOR YOU  */}
      <div className="mt-3">
        <Trends/>
      </div>
    </div>
  );
};

export default Explore;
