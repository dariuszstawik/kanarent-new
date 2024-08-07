import Image from "next/image";
import SectionTitle from "../section-title";
import Button from "../button";
import Link from "next/link";

export default function ProductTemplate({ title, body, img, price }) {
  return (
    <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 mb-16">
      <div className="col-span-1">
        <Image
          src={img?.fields?.file?.url ? "https:" + img.fields.file.url : ""}
          width={img?.fields?.file?.details?.image?.width}
          height={img?.fields?.file?.details?.image?.height}
          //   className="w-full object-cover rounded-lg my-10"
          alt={img?.fields?.description ? img.fields.description : ""}
        />
        <div className="w-full hidden lg:flex flex-row gap-4 justify-center items-center mt-10 ">
          {price && (
            <div className="relative w-1/3 h-[72px] flex justify-center items-center bg-transparent border-[2px] border-forestgreen-300 text-forestgreen-300 ml-[10px]">
              <span className="text-[16px] font-semibold">{price}</span>
              <div className="h-[95px] w-[95px] absolute !m-[0] top-[-9px] left-[-9px] z-[1]">
                <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[2px]" />
                <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[2px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[1]" />
              </div>
            </div>
          )}
          <Link href="/#kontakt">
            <Button className="">Skontaktuj się, żeby wypożyczyć </Button>
          </Link>
        </div>
      </div>
      <div className="lg:col-start-2 col-span-1">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        <article className="mt-10">{body}</article>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 items-center mt-10 lg:hidden">
        {price && (
          <div className="relative w-1/2 md:w-1/3 h-[72px] flex justify-center items-center bg-transparent border-[2px] border-forestgreen-300 text-forestgreen-300 ml-[10px]">
            <span className="text-[16px] font-semibold">{price}</span>
            <div className="h-[95px] w-[95px] absolute !m-[0] top-[-9px] left-[-9px] z-[1]">
              <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[2px]" />
              <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[2px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[1]" />
            </div>
          </div>
        )}
        <Link href="/#kontakt">
          <Button className="">Skontaktuj się, żeby wypożyczyć </Button>
        </Link>
      </div>
    </div>
  );
}
