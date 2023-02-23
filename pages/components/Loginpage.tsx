const town = "nigeria";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Loginpage() {
  return (
    <>
      <section
            className="bg-opacity-60 bg-black w-screen h-screen 
          flex justify-center items-center">
            <div className="bg-white w-[33%]  rounded-md">
                <main className="p-5">
                  <div className="font-semibold text-right text-slate-400">X</div>
                      <div
                          className=" border-black border-4  p-2.5 rounded-md 
                              mx-6 mt-3 flex justify-center items-center gap-2" >
                  <FcGoogle size={20} />
                            <span className="font-bold">Continue with Google</span>
                      </div>
                      <p className="text-center text-base my-5 text-neutral-600">or</p>
                      <form className="mx-6">
                          <input
                              placeholder="Email"
                              type="email"
                              className="block p-2.5 w-full border-black border-4
                              rounded-md my-5"/>
                          <input
                              placeholder="PassWord"
                              type="text"
                              className="block p-2.5 w-full border-black 
                              border-4 rounded-md "/>
                          <button
                              className=" rounded-md font-bold w-full my-5 py-3 text-lg
                            bg-black text-white">
                          <Link href="/components/Dashboard">Log in</Link>
                          </button>
                    </form>
                <div className="mx-6 text-center">
                      <a href="www.facbook.com" className="block my-1 text-blue-600">
                        Use single sign-on
                      </a>
                      <a className="block my-3 text-blue-600 ">Reset password</a>
                      <p className="block my-3 text-gray-600">
                        No account?
                        <a className=" text-blue-600"> Create one</a>
                      </p>
                </div>
              </main>
            </div>
      </section>
    </>
  );
}
