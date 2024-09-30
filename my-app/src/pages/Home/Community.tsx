import { ArrowLeft02Icon, Search01Icon, UserAdd01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";
import TweetList from "./Tweet";
import Modal from "../../component/Modal";

const Community = () => {
  return (
    <div className="basis-[60%] border-x border-x-gray-200">
      <Modal/>
      {/* TOP BAR  */}
      <div className="sticky top-0 z-10 backdrop:filter backdrop-blur-sm bg-white bg-opacity-90">
        <div className="flex justify-between">
          <div className="">
            <div className="px-4 py-3 flex">
              <Link to="/homePage">
                <ArrowLeft02Icon
                  style={{
                    width: "32px",
                    height: "32px",
                    fontSize: "20px",
                  }}
                />
              </Link>
              <div className="ml-6">
                <p className="text-2xl font-bold">Communities</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="flex mt-2">
              <Search01Icon
                style={{
                  width: "20px",
                  height: "20px",
                  fontSize: "20px",
                }}
              />
              <UserAdd01Icon
                style={{
                  width: "20px",
                  height: "20px",
                  fontSize: "20px",
                  marginLeft: "16px",
                }}
              />
            </div>
          </div>
        </div>

          {/* COMMUNITIES TOPIC  */}
        <div className="flex gap-3 mt-6 px-4 py-5">
          <button className="rounded-full outline outline-1 px-4 text-[18px] hover:bg-gray-200 text-gray-700 outline-gray-300 font-bold py-1">
            Sports
          </button>
          <button className="rounded-full outline outline-1 px-4 text-[18px] hover:bg-gray-200 text-gray-700 outline-gray-300 font-bold py-1">
            Technology
          </button>
          <button className="rounded-full outline outline-1 px-4 text-[18px] hover:bg-gray-200 text-gray-700 outline-gray-300 font-bold py-1">
            Arts
          </button>
          <button className="rounded-full outline outline-1 px-4 text-[18px] hover:bg-gray-200 text-gray-700 outline-gray-300 font-bold py-1">
            Entertainment
          </button>
          <button className="rounded-full outline outline-1 px-4 text-[18px] hover:bg-gray-200 text-gray-700 outline-gray-300 font-bold py-1">
            Gaming
          </button>
          <button className="rounded-full outline outline-1 px-4 text-[18px] hover:bg-gray-200 text-gray-700 outline-gray-300 font-bold py-1">
            Politics
          </button>
          <button className="rounded-full outline outline-1 px-4 text-[18px] hover:bg-gray-200 text-gray-700 outline-gray-300 font-bold py-1">
            Music
          </button>
        </div>
      </div>

      <div className="">
      <TweetList/>
      </div>
    </div>
  );
};

export default Community;
