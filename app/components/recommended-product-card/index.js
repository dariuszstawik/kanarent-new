import Link from "next/link";
import ProductTitle from "../product-title";
import { Fade } from "react-awesome-reveal";

export default function RecommendedProductCard({ title, img, href }) {
  return (
    <Fade direction="bottom" delay={300} triggerOnce>
      <div className="w-full md:w-[400px]">
        <div className="relative w-full h-[315px] border-l-8 border-l-white">
          <img
            src={`https://${img.fields.file.url}`}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-1/2 h-[72px] flex justify-center items-center bg-white border-4 border-forestgreen-300 text-forestgreen-300">
            <span>60,00 zł / doba</span>
            <div className="h-[95px] w-[95px] absolute !m-[0] top-[-9px] left-[-9px] z-[1]">
              <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[3px]" />
              <div className="absolute -top-[2px] left-[0px] bg-forestgreen-300 w-[50px] h-[3px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[1]" />
            </div>
          </div>
        </div>
        <div className="w-full mt-6">
          <ProductTitle isAlignedLeft isWhite>
            {title}
          </ProductTitle>
          <button className="mt-4">
            <Link href={`../${href}`}>Sprawdź &gt;</Link>
          </button>
        </div>
      </div>
    </Fade>
  );
}
