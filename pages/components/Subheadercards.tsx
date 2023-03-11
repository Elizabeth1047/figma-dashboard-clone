import { FcPicture } from "react-icons/fc";
import Image from "next/image";


export default function Subheadercards() {
  return (
    <section className="w-[80%]">
      <div className="w-[100%] my-5 ">
        <Image
          src="/image/dec5a579e129f850d9cb185e10eb9cb857c549b3.png"
          width={200}
          height={200}
          alt="my"
          className="rounded-xl"
        />
      </div>
      <p className="text-base ml-0">Diagram basic in Figjam</p>
    </section>
  );
}

// https://static.figma.com/uploads/cb7a96dc6ea6f0a0b8923c232a08611b8336a67a