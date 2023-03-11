import Subheadercards from "./Subheadercards";
import { IoIosClose } from "react-icons/io";

export default function Subheadercard() {
  return (
    <section className="bg-gray-200  py-8 hidden lg:block w-[100%] px-5 rounded-md">
      <div className="flex justify-between py-2 pt-2">
        <p className="font-semibold">Explore FigJam templates</p>
        <div className="flex gap-3 items-center">
          <span className="text-sm text-blue-700 font-bold">See all</span>
          <IoIosClose size={40} color="gray" />
        </div>
      </div>
      <div className="flex justify-between gap-3 items-center xl:hidden">
        <Subheadercards />
        <Subheadercards />
        <Subheadercards />
        <Subheadercards />
      </div>
    </section>
  );
}
