"use client";
import Image from "next/image";
import ProductTitle from "../product-title";
import { Fade } from "react-awesome-reveal";
import Button from "../button";
import Link from "next/link";

export default function ProductCard({ title, img, href }) {
  return (
    <Fade direction="bottom" delay={300} triggerOnce>
      <div className="flex flex-col max-w-screen h-[680px] sm:w-96 rounded shadow-sm">
        <Image
          className="w-contain object-contain h-[50%] rounded-t-lg border border-forestgreen-300"
          // src="/pila-tarczowa-makita.webp"
          src={`https:${img.fields.file.url}`}
          // fill
          // sizes={384}
          width={384}
          height={384}
          // src={img ? `https:${img.fields.file.url}` : ""}
          // width={img?.fields?.file?.details?.image?.width}
          // height={img?.fields?.file?.details?.image?.height}
          // alt={img?.fields?.description ? img.fields.description : ""}
        />
        <div className="p-8 flex flex-col flex-grow justify-around bg-white border-l border-l-forestgreen-300 border-r border-r-forestgreen-300 border-b border-b-forestgreen-300">
          <ProductTitle isAlignedLeft>{title}</ProductTitle>
          {/* <h3 className="text-2xl font-semibold">{title}</h3> */}
          {/* <p className="mt-2">
            {lead.length > 200 ? lead.slice(0, 200) + "..." : lead}
          </p> */}

          <div className="relative w-1/2 h-[72px] flex justify-center items-center bg-transparent border-[2px] border-forestgreen-300 text-forestgreen-300 ml-[10px]">
            <span className="text-[16px] font-semibold">60,00 zł / doba</span>
            <div className="h-[95px] w-[95px] absolute !m-[0] top-[-9px] left-[-9px] z-[1]">
              <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[2px]" />
              <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[2px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[1]" />
            </div>
          </div>
          <Button className="mr-auto  font-semibold text-[16px]">
            <Link href={`../${href}`}>czytaj więcej</Link>
          </Button>
        </div>
      </div>
    </Fade>

    // <div className="w-[400px]">
    //   <div className="relative w-full h-[315px] border-l-8 border-l-forestgreen-300">
    //     <img
    //       src="/pila-tarczowa-makita.webp"
    //       alt=""
    //       className="w-full h-full object-cover"
    //     />
    //     <div className="absolute bottom-0 right-0 w-1/2 h-[72px] flex justify-center items-center bg-white border-4 border-forestgreen-300 text-forestgreen-300">
    //       <span>60,00 zł / doba</span>
    //       <div className="h-[95px] w-[95px] absolute !m-[0] top-[-9px] left-[-9px] z-[1]">
    //         <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[3px]" />
    //         <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[3px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[1]" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-full">
    //     <ProductTitle isAlignedLeft>{title}</ProductTitle>
    //     <button>Sprawdź</button>
    //   </div>
    // </div>
  );
}
