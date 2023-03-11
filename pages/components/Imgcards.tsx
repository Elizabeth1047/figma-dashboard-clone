import Image from 'next/image';
import { FcFile } from "react-icons/fc";

export default function Imgcards() {
  return (
    <section className="  w-full rounded-lg border-x border-y border-slate-200">
      <div className="w-[100%]  ">
        <Image
          src="/image/8ad8ad16-207b-45c9-8fb8-9ff07454e14d.png"
          width={500}
          height={200}
          alt="my"
        />
      </div>
      <div className="flex items-center gap-2 bg-white py-2 pl-4">
        <FcFile size={30} />
        <div>
          <p className="text-base">Diagram basic in Figjam</p>
          <p className="text-gray-300 text-sm">In Draft . Edited 3 days ago</p>
        </div>
      </div>
    </section>
  );
}
