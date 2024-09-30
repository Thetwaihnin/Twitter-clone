import { useState } from "react";
import Image1 from "../../assets/27-Meat-Lovers-Pizza-Recipes.jpg";
import {
  ArrowUpDownIcon,
  HeartAddIcon,
  Notification01Icon,
} from "hugeicons-react";

const Notification = () => {
  const [selectedTap, setSelectedTap] = useState<
    "all" | "varified" | "mentions"
  >("all");

  const all = (tap: "all" | "varified" | "mentions") => {
    const contentElement = document.querySelector("#content") as HTMLElement;
    if (contentElement) {
      contentElement.style.display = "block";
    }
    setSelectedTap(tap);
  };

  const varified = (tap: "all" | "varified" | "mentions") => {
    const contentElement = document.querySelector("#content") as HTMLElement;
    if (contentElement) {
      contentElement.style.display = "none";
    }
    setSelectedTap(tap);
  };

  const mention = (tap: "all" | "varified" | "mentions") => {
    const contentElement = document.querySelector("#content") as HTMLElement;
    if (contentElement) {
      contentElement.style.display = "none";
    }
    setSelectedTap(tap);
  };

  return (
    <div className="basis-[60%] border border-x-gray-500">
      {/* TOP BAR  */}
      <div className="top-0 sticky z-10 backdrop:filter backdrop-blur-sm">
        <div className="mb-2 p-4">
          <strong className="text-2xl">Notifications</strong>
        </div>

        {/* TAP  */}
        <div className="grid grid-cols-3 p-4 ">
          <div
            className="flex cursor-pointer justify-center text-[20px] "
            id="all"
            onClick={() => all("all")}
          >
            <strong
              className={`${
                selectedTap == "all" ? "border-b-4 border-blue-500" : ""
              }`}
            >
              All
            </strong>
          </div>

          <div
            className="flex cursor-pointer justify-center text-[20px]"
            id="varified"
            onClick={() => varified("varified")}
          >
            <strong
              className={`${
                selectedTap == "varified" ? "border-b-4 border-blue-500" : ""
              }`}
            >
              Varified
            </strong>
          </div>

          <div
            className="flex cursor-pointer justify-center text-[20px]"
            id="mention"
            onClick={() => mention("mentions")}
          >
            <strong
              className={`${
                selectedTap == "mentions" ? "border-b-4 border-blue-500" : ""
              }`}
            >
              Mentions
            </strong>
          </div>
        </div>
      </div>

      {/* NOTIFICATIONS*/}
      <div className="flex py-4 border-y border-y-gray-400">
        <div className="md:basis-[20%] lg:basis-[15%] flex justify-center md:mr-1">
          <HeartAddIcon
            className=" text-red-700"
            style={{ width: "32px", height: "30px" }}
          />
        </div>

        <div className="md:basis-2/3 lg:basis-[80%]">
          <div>
            <img
              src={Image1}
              alt="pfp"
              className="md:w-10 md:h-10 rounded-full"
            />
            <p className="mt-2">
              <strong>zae</strong>liked your post
            </p>
            <p className="text-gray-400 mt-3">
              announce her a gba or let her go
            </p>
          </div>
        </div>
      </div>

      <div className="flex py-4 border-y border-y-gray-400">
        <div className="md:basis-[20%] lg:basis-[15%] flex justify-center md:mr-1">
          <HeartAddIcon
            className=" text-red-700"
            style={{ width: "32px", height: "30px" }}
          />
        </div>

        <div className="md:basis-2/3 lg:basis-[80%]">
          <div>
            <img
              src={Image1}
              alt="pfp"
              className="md:w-10 md:h-10 rounded-full"
            />
            <p className="mt-2">
              <strong>zae</strong>liked your post
            </p>
            <p className="text-gray-400 mt-3">
              announce her a gba or let her go
            </p>
          </div>
        </div>
      </div>

      <div className="flex py-4 border-y border-y-gray-400">
        <div className="md:basis-[20%] lg:basis-[15%] flex justify-center md:mr-1">
          <ArrowUpDownIcon
            className=" text-green-400"
            style={{ width: "32px", height: "30px" }}
          />
        </div>

        <div className="md:basis-2/3 lg:basis-[80%]">
          <div>
            <img
              src={Image1}
              alt="pfp"
              className="md:w-10 md:h-10 rounded-full"
            />
            <p className="mt-2">
              <strong>zae</strong>retweeted your post
            </p>
            <p className="text-gray-400 mt-3">
              announce her a gba or let her go
            </p>
          </div>
        </div>
      </div>

      <div className="flex py-4 border-y border-y-gray-400">
        <div className="md:basis-[20%] lg:basis-[15%] flex justify-center md:mr-1">
          <HeartAddIcon
            className=" text-red-700"
            style={{ width: "32px", height: "30px" }}
          />
        </div>

        <div className="md:basis-2/3 lg:basis-[80%]">
          <div>
            <img
              src={Image1}
              alt="pfp"
              className="md:w-10 md:h-10 rounded-full"
            />
            <p className="mt-2">
              <strong>zae</strong>liked your post
            </p>
            <p className="text-gray-400 mt-3">
              announce her a gba or let her go
            </p>
          </div>
        </div>
      </div>

      <div className="flex py-4 border-y border-y-gray-400">
        <div className="md:basis-[20%] lg:basis-[15%] flex justify-center md:mr-1">
          <Notification01Icon
            className=" text-blue-700"
            style={{ width: "32px", height: "30px" }}
          />
        </div>

        <div className="md:basis-2/3 lg:basis-[80%]">
          <div>
            <img
              src={Image1}
              alt="pfp"
              className="md:w-10 md:h-10 rounded-sm"
            />
            <p className="mt-2">
              <strong>zae</strong>liked your post
            </p>
            <p className="text-gray-400 mt-3">
              announce her a gba or let her go
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
