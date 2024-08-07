"use client";

import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const CategoryCard = ({ title, img, href }) => {
  return (
    <Fade direction="bottom" delay={200} triggerOnce>
      <Link href={`../${href}`}>
        <div
          className={`max-w-[290px] flex flex-col items-start justify-start text-center text-5xl text-white font-poppins}`}
        >
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <img
              className="h-[271px] flex-1 relative rounded-tl-none rounded-tr-11xl rounded-b-none max-w-full overflow-hidden object-cover"
              alt=""
              src={
                img?.fields?.file?.url ? `https://${img.fields.file.url}` : ""
              }
            />
            <div className="h-[95px] w-[95px] absolute !m-[0] top-[-9px] left-[-9px] z-[1]">
              <div className="absolute top-[0px] left-[0px] bg-forestgreen-300 w-[95px] h-1" />
              <div className="absolute top-[95px] left-[0px] bg-forestgreen-300 w-[95px] h-1 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
            </div>
          </div>
          <div className="min-h-[120px] self-stretch bg-forestgreen-300 flex flex-row items-start justify-center py-[30px] pr-5 pl-[21px] z-[1]">
            {/* <div className="h-[150px] w-[300px] relative bg-forestgreen-300 hidden" /> */}
            <b className="relative leading-[30px] z-[2] mq450:text-lgi mq450:leading-[24px]">
              {title}
            </b>
          </div>
          <button className="cursor-pointer py-3 px-[78px] bg-[transparent] rounded-t-none rounded-b-11xl flex flex-row items-start justify-start gap-[5px] z-[2] border-[2px] border-solid border-forestgreen-300 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[60px] w-[300px] relative rounded-t-none rounded-b-11xl box-border hidden border-[2px] border-solid border-forestgreen-300" />
            <div className="relative text-lg leading-[30px] font-semibold font-poppins text-forestgreen-300 text-center inline-block min-w-[123px] z-[3]">
              Wyświetl &gt;
            </div>
            <div className="flex flex-col items-center justify-center pt-[3px] px-0 pb-0">
              <img
                className="w-3 h-6 relative overflow-hidden shrink-0 z-[3]"
                alt=""
                src="/weuiarrowfilled.svg"
              />
            </div>
          </button>
        </div>
      </Link>
    </Fade>
  );
};

// const CategoryCard = ({ title, img, className = "" }) => {
//   return (
//     // <div className=" flex flex-col items-start justify-start">
//     <div
//       className={`w-[300px] self-stretch flex flex-col items-start justify-start pt-[9px] pb-0 pr-0 pl-[9px] ${className}`}
//     >
//       <div className="self-stretch flex flex-row items-start justify-start relative">
//         <img
//           className="h-[271px] flex-1 relative rounded-tl-none rounded-tr-11xl rounded-b-none max-w-full overflow-hidden object-cover"
//           loading="lazy"
//           alt=""
//           src="/rectangle-34624733@2x.png"
//         />
//         <div className="h-[95px] w-[95px] absolute !m-[0] top-[-9px] left-[-9px] z-[1]">
//           <div className="absolute top-[0px] left-[0px] bg-forestgreen-300 w-[95px] h-1" />
//           <div className="absolute top-[95px] left-[0px] bg-forestgreen-300 w-[95px] h-1 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
//         </div>
//       </div>
//       <button className="cursor-pointer [border:none] py-[25px] pr-14 pl-[57px] bg-forestgreen-300 self-stretch flex flex-row items-start justify-start whitespace-nowrap">
//         <div className="h-20 w-[300px] relative bg-forestgreen-300 hidden" />
//         <b className="relative text-xl font-poppins text-white text-center z-[1]">
//           {title}
//         </b>
//       </button>
//       <button className="cursor-pointer py-[7px] px-5 bg-[transparent] self-stretch rounded-t-none rounded-b-11xl flex flex-row items-start justify-center gap-[10px] border-[2px] border-solid border-forestgreen-300">
//         <div className="h-12 w-[300px] relative rounded-t-none rounded-b-11xl box-border hidden border-[2px] border-solid border-forestgreen-300" />
//         <div className="relative text-base leading-[28px] font-semibold font-poppins text-forestgreen-300 text-center inline-block min-w-[109px] z-[1]">
//           Odkryj więcej
//         </div>
//         <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
//           <img
//             className="w-3 h-6 relative overflow-hidden shrink-0 z-[1]"
//             alt=""
//             src="/weuiarrowfilled.svg"
//           />
//         </div>
//       </button>
//     </div>
//   );
// };

export default CategoryCard;
