import { RxHamburgerMenu } from "react-icons/rx";
import { BsSave } from "react-icons/bs";


export default function Header() {
  return (
    <>
        <div className="  w-[100%] " >
            <section className="border-b-2 border-slate-400 
                  sm:flex sm:justify-between sm:items-center text-black w-screen">
                    <div className="flex items-center gap-4 p-5 ">
                      <RxHamburgerMenu 
                      className="sm:hidden" 
                      size={25}
                      color="black"/>
                      <p className="text-base font-semibold">Recently Viewed</p>
                    </div>
              <BsSave className=" hidden sm:block sm:mr-30 " />
            </section>
        </div>
    </>
  );


        
}
