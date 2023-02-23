import Link from "next/link";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Mainbody from "./Mainbody";

export default function Dashboard() {
  return (
    <div className="overflow-x-clip">
        <Navbar />
          <div className=" flex justify-between gap-10 pt-[65px] ">
              <Sidebar />
              <Main />
          </div>
        <Mainbody />
    </div>
    // <button className=" rounded-md font-bold w-full my-5 py-3 text-lg bg-black text-white">
    //   <Link href="/components/Loginpage">Log in</Link>
    // </button>
  );
}
