import { AiOutlinePlus } from "react-icons/ai";

interface props {
  imgs: any;
  title: string;
  text: string;
}

export default function Headercards({imgs, title, text}:props) {
  return (
      <section
            className=" border-x-2 border-y-2 border-gray-200 
            flex justify-between items-center sm:w-[59%] 
          md:max-w-[30%] lg:max-w-[23%]  xl:max-w-[26%] p-3   rounded-lg mx-3"
      >
        <div className="flex  gap-4  items-center">
          <div className="">{imgs}</div>
          <div>
            <h6 className="font-semibold">{title}</h6>
            <p className="hidden sm:block text-sm text-gray-400">{text}</p>
          </div>
        </div>
        <AiOutlinePlus size={20} />
      </section>
  );
}
