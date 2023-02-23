import { HiOutlineClock } from "react-icons/hi";
import { RiDraftLine } from "react-icons/ri";
import { BsArrowUpCircle } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";


export default function Sidebar() {
  return (
    <>
      <aside
        className="  w-[260px] fixed sm:left-0 left-[-260px]
        h-full border-r border-gray-500 pb-10 sm:transition-transform duration-300 ease-in-out z-30 
          "
      >
        <div className="border-b-2 border-gray-200 m-4  ">
          <div className="flex items-center gap-2 hover:bg-cyan-100 py-1">
            <HiOutlineClock size={15} />
            <span className="text-[12px] ">Recent</span>
          </div>
          <div className="flex items-center gap-2 mb-5 mt-2 hover:bg-cyan-100 py-1">
            <RiDraftLine size={15} />
            <span className="text-[12px]">Drafts</span>
          </div>
        </div>
        <div className="bg-gray-100 p-5 flex-col items-center text-center rounded-md mt-1 mr-4">
          <div className="flex justify-center">
            <BsArrowUpCircle
              color="black"
              size={25}
              className="animate-bounce"
            />
          </div>
          <p className="text-[12px] mt-1">
            Ready to go beyond this free plan <br className="mt-4" />
            Upgrade for Premium Feature
          </p>
          <div className="bg-blue-700 py-2 px-10 rounded-md mt-2 text-white text-sm">
            Views Plan
          </div>
        </div>
        <div className="border-t-2 border-b-2 border-gray-200 p-4 mt-2">
          <h6 className="text-sm font-semibold my-2">Favorite files</h6>
          <p className="text-[10px] text-gray-400">
            Hover over any file and click thr star to <br /> add it here
          </p>
        </div>
        <div className="text-sm p-5">
          <h6 className="text-sm font-semibold">Teams</h6>
          <div className="flex items-center mt-3">
            <MdCheckBoxOutlineBlank
              size={10}
              className="bg-purple-700 text-purple-700 mr-1"
            />
            <span className="text-[12px] mr-1">lizzy's teams</span>
            <span className="bg-blue-400 text-[11px] text-blue-800 py-[2px] px-[4px] rounded-lg">
              Free
            </span>
          </div>
          <p className="text-[12px] flex my-2 ">
            <MdCheckBoxOutlineBlank size={10} className="text-white mr-1" />
            <span>Team project</span>
          </p>
          <div className="flex items-center mr-1 gap-1">
            <AiOutlinePlus />
            <span className="text-[12px]">Create new team</span>
          </div>
        </div>
      </aside>
    </>
  );
}

