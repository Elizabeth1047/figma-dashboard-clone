import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Subheadercard from "./Subheadercard";
import Imgcards from "./Imgcards";
import { FcFile } from "react-icons/fc";

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
          imglink={
            "https://static.figma.com/uploads/dec5a579e129f850d9cb185e10eb9cb857c549b3"
          }
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
          <section className="  w-full rounded-lg border-x border-y border-slate-200">
            <div className="w-[100%]  ">
              <img src="https://s3-alpha.figma.com/thumbnails/4c2b1730-59cb-4849-a4c5-a7376736ef6f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230219T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c11099f4a607d946e22812fd148598c9069f1a916cff128fbaf5ff1187684dd4" />
            </div>
            <div className="flex items-center gap-2 bg-white py-2 pl-4">
              <FcFile size={30} />
              <div>
                <p className="text-base">Diagram basic in Figjam</p>
                <p className="text-gray-300 text-sm">
                  In Draft . Edited 3 days ago
                </p>
              </div>
            </div>
          </section>
          <section className="  w-full rounded-lg border-x border-y border-slate-200">
            <div className="w-[100%]">
              <img src="https://s3-alpha.figma.com/thumbnails/78a96fcb-4ec9-4c86-8297-fe393f8e8454?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230219T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fccb94639cba11043167d27d8faf433da465af238a79f2174ba16c58b329434a" />
            </div>
            <div className="flex items-center gap-2 bg-white py-2 pl-4">
              <FcFile size={30} />
              <div>
                <p className="text-base">Diagram basic in Figjam</p>
                <p className="text-gray-300 text-sm">
                  In Draft . Edited 3 days ago
                </p>
              </div>
            </div>
          </section>
          <section className="  w-full rounded-lg border-x border-y border-slate-200">
            <div className="w-[100%] ">
              <img src="https://s3-alpha.figma.com/thumbnails/3af0ad02-f8bb-4106-9179-82c7f11e88c1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ec8da6247bb7ce39076b8772c791541c48eb26cd8fafe2d4eed1187b9c1ea939" />
            </div>
            <div className="flex items-center gap-2 bg-white py-2 pl-4">
              <FcFile size={30} />
              <div>
                <p className="text-base">Diagram basic in Figjam</p>
                <p className="text-gray-300 text-sm">
                  In Draft . Edited 3 days ago
                </p>
              </div>
            </div>
          </section>
          <section className="  w-full rounded-lg border-x border-y border-slate-200">
            <div className="w-[100%]">
              <img src="https://s3-alpha.figma.com/thumbnails/78a96fcb-4ec9-4c86-8297-fe393f8e8454?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230219T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fccb94639cba11043167d27d8faf433da465af238a79f2174ba16c58b329434a" />
            </div>
            <div className="flex items-center gap-2 bg-white py-2 pl-4">
              <FcFile size={30} />
              <div>
                <p className="text-base">Diagram basic in Figjam</p>
                <p className="text-gray-300 text-sm">
                  In Draft . Edited 3 days ago
                </p>
              </div>
            </div>
          </section>
          <section className="  w-full rounded-lg border-x border-y border-slate-200">
            <div className="w-[100%]">
              <img src="https://s3-alpha.figma.com/thumbnails/4c2b1730-59cb-4849-a4c5-a7376736ef6f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230219T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c11099f4a607d946e22812fd148598c9069f1a916cff128fbaf5ff1187684dd4" />
            </div>
            <div className="flex items-center gap-2 bg-white py-2 pl-4">
              <FcFile size={30} />
              <div>
                <p className="text-base">Diagram basic in Figjam</p>
                <p className="text-gray-300 text-sm">
                  In Draft . Edited 3 days ago
                </p>
              </div>
            </div>
          </section>
          <section className="  w-full rounded-lg border-x border-y border-slate-200">
            <div className="w-[100%]">
              <img src="https://s3-alpha.figma.com/thumbnails/0e15f572-e617-467e-ac08-9934c843b08e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230219T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=07d399a715dd997a725218e229e3092e1b05c78c8e28b2b6dc9a06ce393174c6" />
            </div>
            <div className="flex items-center gap-2 bg-white py-2 pl-4">
              <FcFile size={30} />
              <div>
                <p className="text-base">Diagram basic in Figjam</p>
                <p className="text-gray-300 text-sm">
                  In Draft . Edited 3 days ago
                </p>
              </div>
            </div>
          </section>
          <section className="  w-full rounded-lg border-x border-y border-slate-200">
            <div className="w-[100%]">
              <img src="https://s3-alpha.figma.com/thumbnails/4c2b1730-59cb-4849-a4c5-a7376736ef6f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230219T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c11099f4a607d946e22812fd148598c9069f1a916cff128fbaf5ff1187684dd4" />
            </div>
            <div className="flex items-center gap-2 bg-white py-2 pl-4">
              <FcFile size={30} />
              <div>
                <p className="text-base">Diagram basic in Figjam</p>
                <p className="text-gray-300 text-sm">
                  In Draft . Edited 3 days ago
                </p>
              </div>
            </div>
          </section>
          <section className="  w-full rounded-lg border-x border-y border-slate-200">
            <div className="w-[100%]">
              <img src="https://s3-alpha.figma.com/thumbnails/3af0ad02-f8bb-4106-9179-82c7f11e88c1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ec8da6247bb7ce39076b8772c791541c48eb26cd8fafe2d4eed1187b9c1ea939" />
            </div>
            <div className="flex items-center gap-2 bg-white py-2 pl-4">
              <FcFile size={30} />
              <div>
                <p className="text-base">Diagram basic in Figjam</p>
                <p className="text-gray-300 text-sm">
                  In Draft . Edited 3 days ago
                </p>
              </div>
            </div>
          </section>
          <section className="  w-full rounded-lg border-x border-y border-slate-200">
            <div className="w-[100%]">
              <img src="https://s3-alpha.figma.com/thumbnails/78a96fcb-4ec9-4c86-8297-fe393f8e8454?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230219T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fccb94639cba11043167d27d8faf433da465af238a79f2174ba16c58b329434a" />
            </div>
            <div className="flex items-center gap-2 bg-white py-2 pl-4">
              <FcFile size={30} />
              <div>
                <p className="text-base">Diagram basic in Figjam</p>
                <p className="text-gray-300 text-sm">
                  In Draft . Edited 3 days ago
                </p>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}
