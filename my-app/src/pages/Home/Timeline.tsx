import Tweet from "./Tweet";
import { useState } from "react";
import {
  Gif01Icon,
  Image01Icon,
  SmileIcon,
  Video01Icon,
} from "hugeicons-react";
import profile from "../../assets/f6b5ebb25f10f94f20c1240b24b6550a.jpg"
import { useNavigate } from "react-router-dom";

const Timeline = () => {
    const [selectedTap, setSelectedTap] = useState<"forYou" | "following">(
      "forYou"
    );
  
    const forYou = (tap: "forYou" | "following") => {
      const contentElement = document.querySelector("#content") as HTMLElement;
      if (contentElement) {
        contentElement.style.display = "block";
      }
      setSelectedTap(tap);
    };
  
    const following = (tap: "forYou" | "following") => {
      const contentElement = document.querySelector("#content") as HTMLElement;
      if (contentElement) {
        contentElement.style.display = "none";
      }
      setSelectedTap(tap);
    };
  
    const [focus, setFocus] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
      <div className="basis-[60%] border-x border-gray-200 ">
        {/* TAP  */}
        <div className="grid grid-cols-2 p-4 sticky top-0 z-10 bg-white bg-opacity-85 backdrop:filter backdrop-blur-sm">
          <div
            className="flex cursor-pointer justify-center text-[20px] "
            id="forYou"
            onClick={() => forYou("forYou")}
          >
            <strong
              className={`${
                selectedTap == "forYou" ? "border-b-4 border-blue-500" : ""
              }`}
            >
              For You
            </strong>
          </div>
          <div
            className="flex cursor-pointer justify-center text-[20px]"
            id="following"
            onClick={() => following("following")}
          >
            <strong
              className={`${
                selectedTap == "following" ? "border-b-4 border-blue-500" : ""
              }`}
            >
              Following
            </strong>
          </div>
        </div>
  
        {/* WHAT'S HAPPENING  */}
        <div className="flex py-4 border border-gray-200">
          <div className="md:basis-[20%] lg:basis-[15%] flex justify-center md:mr-1">
            <img
              src={profile}
              alt="profile"
              className="rounded-full md:w-12 md:h-12 cursor-pointer"
              onClick={()=>navigate("/username")}
            />
          </div>
  
          <div className="md:basis-2/3 lg:basis-[60%]">
            <input
              className="text-2xl text-gray-500 outline-none "
              type="text"
              placeholder="What is happening?!"
              onFocus={() => setFocus(!focus)}
            />
            {focus && (
              <div className="mt-3">
                <strong className="my-3 text-blue-500">Everyone can reply</strong>
              </div>
            )}
  
            <div className="flex justify-around">
              <div className="flex justify-between mt-6 p-2 py-2 w-[60%] text-blue-400 text-xl">
                <Image01Icon style={{ width: "22px", height: "22px" }} />
                <Gif01Icon style={{ width: "22px", height: "22px" }} />
                <Video01Icon style={{ width: "22px", height: "22px" }} />
                <SmileIcon style={{ width: "22px", height: "22px" }} />
              </div>
  
              <div className="mt-5">
                <button
                  type="submit"
                  className=" bg-blue-300 rounded-full w-20 py-2 px-2 text-white"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* TWEETS SECTION  */}
        <div id="content">
          <Tweet />
        </div>
      </div>
    );
  };

  export default Timeline;