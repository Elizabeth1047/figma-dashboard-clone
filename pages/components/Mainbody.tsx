import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Subheadercard from "./Subheadercard";
import Image from "next/image";
import Imgcards from "./Imgcards";
interface props {
  imgss: any;
}
interface props {
  imglink: any;
}


export default function Mainbody({imgss}:props) {
  return (
    <>
      <section className="relative top-[300px] left-0  sm:left-[260px] md:top-[330px] lg:top-[230px]  px-5 sm:w-[65%] md:w-[70%] lg:w-[78%] xl:w-[81%] z-0 w-screen">
        <Subheadercard
        />
        <header className="flex justify-between items-center md:py-10 text-sm sm:pb-4 pb-4 sm:mr-4">
          <div className="flex gap-2">
            <span className="text-gray-300 text-sm">Filter:</span>
            <div className="flex items-center gap-1">
              <span>All Files</span>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <span className="text-gray-300 text-sm">Sort:</span>
              <div className="flex items-center gap-1">
                <span>Last Viewed</span>
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
            <div className="flex gap-2">
              <CiGrid41 />
              <RxHamburgerMenu />
            </div>
          </div>
        </header>

        <main className="grid justify-between w-[100%]  md:grid-cols-2  items-center lg:grid-cols-3  xl:w-[100%] gap-5 sm:mr-4">
          <Imgcards />
          <Imgcards />
          <Imgcards />
          <Imgcards />
          <Imgcards />
          <Imgcards />
        </main>
      </section>
    </>
  );
}
