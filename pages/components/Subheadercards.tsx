import { FcPicture } from "react-icons/fc";

interface props {
  imglink: string;
}

export default function Subheadercards({imglink:any}:props) {
  return (
    <section className="w-[80%]">
      {/* <FcPicture size={200} /> */}
      <div className="w-[100%] my-5 ">
        <img
          src="https://static.figma.com/uploads/cb7a96dc6ea6f0a0b8923c232a08611b8336a67a"
        />
      </div>
      <p className="text-base ml-0">Diagram basic in Figjam</p>
    </section>
  );
}

// https://static.figma.com/uploads/cb7a96dc6ea6f0a0b8923c232a08611b8336a67a