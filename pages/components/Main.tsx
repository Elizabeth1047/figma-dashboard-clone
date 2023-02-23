import Header from "./Header";
import Headercards from "./Headercards";
import { FcFile } from "react-icons/fc";
import { FcImageFile } from "react-icons/fc";
import { BsSave } from "react-icons/bs";

interface props {
  imgs: any;
  title: string;
  text: string;
}
let Firsticon: any = <FcFile />;
let importedfile: any = <BsSave />;
let Secondicon: any = <FcImageFile />;

export default function Main({ imgs, title, text }: props) {
  return (
    <>
      <div
        className="fixed sm:left-[260px] left-0 
      min-w-[90%] z-10 bg-white lg:pr-5 "
      >
        <Header />
        <section className=" flex flex-col gap-4 
        md:hidden sm:pl-4 py-5 shadow-lg shadow-black ">
          <Headercards
            imgs={Firsticon}
            title={"New design file"}
            text={"Design and prototype"}
          />
          <Headercards
            imgs={Secondicon}
            title={"New Figjam file"}
            text={"Whiteboard and diagram"}
          />
        </section>

        <section className="gap-4  hidden md:flex md:flex-col md:pl-4 lg:hidden py-5 shadow-lg shadow-black ">
          <div className="flex flex-row gap-5">
            <Headercards
              imgs={Firsticon}
              title={"New design file"}
              text={"Design and prototype"}
            />
            <Headercards
              imgs={Secondicon}
              title={"New Figjam file"}
              text={"Whiteboard and diagram"}
            />
          </div>
          <div className="">
            <Headercards
              imgs={importedfile}
              title={"New Figjam file"}
              text={"Whiteboard and diagr"}
            />
          </div>
        </section>

        <section className="gap-6  hidden lg:flex lg:flex-row lg:px-5 py-5 shadow-sm lg:mr-28 ">
          <Headercards
            imgs={Firsticon}
            title={"New design file"}
            text={"Design and prototype"}
          />
          <Headercards
            imgs={Secondicon}
            title={"New Figjam file"}
            text={"Whiteboard and diagram"}
          />

          <Headercards
            imgs={importedfile}
            title={"Import files"}
            text={"Bring in files from other tools"}
          />
        </section>
      </div>
    </>
  );
}
