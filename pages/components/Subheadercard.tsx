import Subheadercards from "./Subheadercards";
import { IoIosClose } from "react-icons/io";

interface props {
  imglink: any;
}

export default function Subheadercard({ imglink: any }: props) {
  return (
    <section className="bg-gray-200 p-1 hidden lg:block w-[100%] px-5 pb-1">
      <div className="flex justify-between py-2 pt-2">
        <p className="font-semibold">Explore FigJam templates</p>
        <div className="flex gap-3 items-center">
          <span className="text-sm text-blue-700 font-bold">See all</span>
          <IoIosClose size={40} color="gray" />
        </div>
      </div>
      <div className="flex justify-between items-center xl:hidden">
        <section className="w-[80%]">
          <div className="w-[100%] my-5 ">
            <img src="https://static.figma.com/uploads/dec5a579e129f850d9cb185e10eb9cb857c549b3" />
          </div>
          <p className="text-base ml-0">Diagram basic in Figjam</p>
        </section>
        
        <section className="w-[80%]">
          <div className="w-[100%] my-5 ">
            <img src="https://static.figma.com/uploads/cb7a96dc6ea6f0a0b8923c232a08611b8336a67a" />
          </div>
          <p className="text-base ml-0">Diagram basic in Figjam</p>
        </section>
        
        <section className="w-[80%]">
          <div className="w-[100%] my-5 ">
            <img src="https://static.figma.com/uploads/2ede031a7acb59d1f6f5f6c8ae188074913680af" />
          </div>
          <p className="text-base ml-0">Diagram basic in Figjam</p>
        </section>
        
      </div>
      
      <div className="xl:flex xl:justify-between xl:items-center gap-3 lg:hidden">
        <section className="w-[80%]">
          <div className="w-[100%] my-5 ">
            <img src="https://static.figma.com/uploads/dec5a579e129f850d9cb185e10eb9cb857c549b3" />
          </div>
          <p className="text-base ml-0">Diagram basic in Figjam</p>
        </section>
        
        <section className="w-[80%]">
          {/* <FcPicture size={200} /> */}
          <div className="w-[100%] my-5 ">
            <img src="https://static.figma.com/uploads/cb7a96dc6ea6f0a0b8923c232a08611b8336a67a" />
          </div>
          <p className="text-base ml-0">Diagram basic in Figjam</p>
        </section>
        
        <section className="w-[80%]">
          {/* <FcPicture size={200} /> */}
          <div className="w-[100%] my-5 ">
            <img src="https://static.figma.com/uploads/2ede031a7acb59d1f6f5f6c8ae188074913680af" />
          </div>
          <p className="text-base ml-0">Diagram basic in Figjam</p>
        </section>
        
        <section className="w-[80%]">
          {/* <FcPicture size={200} /> */}
          <div className="w-[100%] my-5 ">
            <img src="https://static.figma.com/uploads/f8de29efb26c60db3029ce1a9c88eb530e849d39" />
          </div>
          <p className="text-base ml-0">Diagram basic in Figjam</p>
        </section>
        
        {/* <Subheadercards
          imglink={
            "https://static.figma.com/uploads/dec5a579e129f850d9cb185e10eb9cb857c549b3"
          }
        />
         */}
      </div>
    </section>
  )
}
