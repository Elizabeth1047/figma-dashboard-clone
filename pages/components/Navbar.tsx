import { FiFigma } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";


export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 flex justify-between fixed items-center px-2 min-w-[100%] z-10">
        <div className="flex justify-center items-center">
          <div className="flex justify-start items-center px-2">
            <FiFigma size={20} color="white" />
            <div className="text-white text-sm mx-2">
              <p>Lizzy</p>
              <p>egharevbalizzy@gmail.com</p>
            </div>
            <MdOutlineKeyboardArrowDown
              size={20}
              color="white"
              className="ml-3"
            />
          </div>
          <hr></hr>
          <div className="bg-gray-700 flex p-3 w-[400px] justify-center items-center gap-1 rounded my-2 mx-4">
            <CiSearch size={25} color="white" />
            <input
              placeholder="Search Files,Teams or People"
              className="bg-gray-700 w-full border-none outline-none text-white "
            />
          </div>
        </div>
        <div className="text-white flex items-center justify-center">
          <div className="flex items-center m-2 gap-4 ">
            <TfiWorld size={20} color="white" className="animate-spin" />
            <span className="text-sm mr-3">Explore Community</span>
          </div>
          <div className="flex items-center m-2 gap-4">
            <IoIosNotificationsOutline size={25} />
            <span className="py-1 px-3  bg-violet-700 rounded-full">L</span>
            <MdOutlineKeyboardArrowDown size={20} color="white" />
          </div>
        </div>
      </nav>
    </>
  );
}
