import {
  ArrowUpDownIcon,
  HeartAddIcon,
  Message02Icon,
  MoreHorizontalIcon,
  SatelliteIcon,
} from "hugeicons-react";
import Image1 from "../../assets/27-Meat-Lovers-Pizza-Recipes.jpg";
import image2 from "../../assets/missqumissgu.jpg";

export type Post = {
  displayName: string;
  userName: string;
  caption: string;
  postVid?: string;
  postImage?: string;
};

export const data: Post[] = [
  {
    displayName: "Karina's Wife",
    userName: "@weibluu",
    caption: "We love gay people Happy Pride Month!",
    postImage: image2,
  },
  {
    displayName: "PanPan",
    userName: "@panpan_tomato",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quam quia, illo aspernatur quo reprehenderit quae accusantium enim molestiae laboriosam iusto nam dicta ipsum est nostrum qui voluptas? Adipisci, aut.",
  },
  {
    displayName: "Karina",
    userName: "@katarinabluu",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quam quia, illo aspernatur quo reprehenderit quae accusantium enim molestiae laboriosam iusto nam dicta ipsum est nostrum qui voluptas? Adipisci, aut.",
  },
];

const Tweet = ({ displayName, userName, caption, postImage }: Post) => {
  return (
    <div className="flex py-4 border-y border-gray-200">
      <div className="md:basis-[20%] lg:basis-[15%] flex justify-center md:mr-1">
        <img
          src={Image1}
          alt="profile"
          className="rounded-full md:w-12 md:h-12"
        />
      </div>

      <div className="md:basis-2/3 lg:basis-[80%]">
        <div className="flex">
          <div className="">
            <div className="flex justify-between">
              <div className="flex">
                <strong>{displayName}</strong>
                <span className="mx-2 text-gray-400">{userName}</span>
                <span className=" text-gray-400">June 1</span>
              </div>
              <div className="">
                <MoreHorizontalIcon
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                  className="hover:bg-gray-200 hover:text-blue-500 hover:rounded-full"
                />
              </div>
            </div>
            <div className="">
              <p>{caption}</p>
            </div>
            {postImage && (
              <div className="mt-2 rounded-lg h-[600px] w-[80%] overflow-hidden ">
                <img src={postImage} alt="image2" />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex">
            <div className="mr-2">
              <Message02Icon style={{ width: "18px", height: "18px" }} />
            </div>
            <p className=" text-[14px]">12</p>
          </div>
          <div className="flex ">
            {" "}
            <div className="mr-2 hover:text-green-400 cursor-pointer">
              <ArrowUpDownIcon style={{ width: "18px", height: "18px" }} />
            </div>
            <p className=" text-[14px]">12</p>
          </div>
          <div className="flex">
            {" "}
            <div className="mr-2 hover:text-red-600 cursor-pointer">
              <HeartAddIcon style={{ width: "18px", height: "18px" }} />
            </div>{" "}
            <p className="text-[14px]">12k</p>
          </div>{" "}
          <div className="flex">
            <div className="mr-2">
              <SatelliteIcon style={{ width: "18px", height: "18px" }} />
            </div>
            <p className="text-[14px]">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TweetList = () => {
  return (
    <div>
      {data.map((post, index) => (
        <Tweet
          key={index}
          displayName={post.displayName}
          userName={post.userName}
          caption={post.caption}
          postImage={post.postImage}
          postVid={post.postVid}
        />
      ))}
    </div>
  );
};

export default TweetList;
