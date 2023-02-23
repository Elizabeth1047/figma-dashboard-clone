
import { FcFile } from "react-icons/fc";


export default function Imgcards() {
  return (
    <section className="  w-full rounded-lg border-x border-y border-slate-200">
      <div className="w-[100%]">
        <img src="https://s3-alpha.figma.com/thumbnails/3af0ad02-f8bb-4106-9179-82c7f11e88c1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC2XFMBUWK%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ec8da6247bb7ce39076b8772c791541c48eb26cd8fafe2d4eed1187b9c1ea939" />
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

