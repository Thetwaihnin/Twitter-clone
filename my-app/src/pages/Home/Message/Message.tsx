import {
  ArrowLeft02Icon,
  MailAdd01Icon,
  Search01Icon,
  Settings01Icon,
} from "hugeicons-react";
import { useState } from "react";
import group from "../../../assets/91562061d808c3b4d805233c11e1544e.jpg";
const Message = () => {
  const [click, setClick] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <div className="flex w-full">
      <div className="basis-1/3  p-6 ">
        <div className="pb-4">
          <div className="flex justify-between ">
            <div className="font-bold text-3xl">Messages</div>
            <div className="flex">
              <div className="hover:rounded-full hover:bg-gray-200 p-3">
                <Settings01Icon />
              </div>
              <div className="hover:rounded-full hover:bg-gray-200 p-3">
                <MailAdd01Icon />
              </div>
            </div>
          </div>
          {click ? (
            <div className="  col-span-4 ml-5">
              <div className="flex">
                <div className=" ">
                  <div className="mt-6 mr-3" onClick={() => setClick(!click)}>
                    <ArrowLeft02Icon
                      style={{
                        width: "25px",
                        height: "25px",
                        fontSize: "20px",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full mt-3 relative">
                  <Search01Icon
                    style={{ width: "18px", height: "18px" }}
                    className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-500  group-focus-within:text-blue-700 transition-colors duration-300"
                  />
                  <input
                    type="text"
                    name="search"
                    onFocus={() => setFocus(!focus)}
                    placeholder="Search Direct Messages"
                    className="pl-16 text-[18px] text-black w-full placeholder-black rounded-full outline outline-1 outline-gray-300 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700 opacity-30 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div
                className="space-y-4 relative group col-span-4 "
                onClick={() => setClick(!click)}
              >
                <Search01Icon
                  style={{ width: "18px", height: "18px" }}
                  className="absolute left-4 top-10 transform -translate-y-1/2 text-gray-500  group-focus-within:text-blue-700 transition-colors duration-300"
                />
                <input
                  type="text"
                  name="search"
                  placeholder="Search Direct Messages"
                  className="pl-16 text-[18px] text-black w-full placeholder-black rounded-full outline outline-1 outline-gray-300 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700 opacity-30 transition-all duration-300"
                />
              </div>
            </>
          )}
        </div>
        {click ? (
          <div>
            <p className="text-gray-500 text-[18px]">
              Try Searching for groups, people, or messages
            </p>
          </div>
        ) : (
          <div className="">
            <div className="p-4 hover:bg-gray-200">
              <div className="flex">
                <div>
                  <img
                    src={group}
                    alt="group"
                    className=" rounded-full w-14 h-14"
                  />
                </div>
                <div className="mx-3">
                  <p className="text-2xl">Depression folks</p>
                  <p className="text-gray-500 text-[18px]">411 shared a post</p>
                </div>
                <div className="mt-1">
                  <p className="text-gray-500 text-[18px]">. 1h</p>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="p-4 hover:bg-gray-200">
              <div className="flex">
                <div>
                  <img
                    src={group}
                    alt="group"
                    className=" rounded-full w-14 h-14"
                  />
                </div>
                <div className="mx-3">
                  <p className="text-2xl">Depression folks</p>
                  <p className="text-gray-500 text-[18px]">411 shared a post</p>
                </div>
                <div className="mt-1">
                  <p className="text-gray-500 text-[18px]">. 1h</p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="basis-2/3 flex items-center p-6 h-screen">
        <div className="ml-8 w-80 ">
        <p className="text-3xl font-bold">Select a message</p>
        <p className="text-gray-500 mt-4">Choose from your existing conversations, start a new one, or just keep swimming.</p>
        <button className="px-6 py-3 mt-8 text-[20px] font-bold bg-blue-500 rounded-full text-white">New message</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
