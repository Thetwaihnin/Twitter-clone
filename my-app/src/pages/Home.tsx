import { Outlet } from "react-router-dom";
import SideBar from "./Home/SideBar";
// import MainPage from "./Home/MainPage";


const Home = () => {
  return (
    <div className=" w-full flex ">
      {/* FIRST COLOUM  */}
      <div className="basis-[15%] flex justify-end sticky ">
        <SideBar/>
      </div>
      <Outlet/>
    </div>
  );
};

export default Home;
