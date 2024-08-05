"use client";
import Link from "next/link";
import Button from "../button";
import RecommendedProductCard from "../recommended-product-card";
import SectionTitle from "../section-title";

export default function RecommendedProductsSection({ products }) {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    // <section
    //   className="relative w-screen mt-28 px-32 py-16 flex flex-row gap-[50px] text-white after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-forestgreen-300 after:opacity-80"
    //   style={{
    //     backgroundImage: 'url("/pattern20.png")',
    //     backgroundPosition: "center",
    //   }}
    // >

    <section
      className="relative w-screen px-32 py-16  text-white bg-forestgreen-300"
      style={{
        backgroundImage: 'url("/pattern10.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col lg:flex-row justify-between mb-16 ">
        <SectionTitle isAlignedLeft isWhite>
          Polecamy
        </SectionTitle>
        <Link href="/#sprzet" onClick={(e) => handleScroll(e)}>
          <Button isWhite className="mt-4 min-w-[300px] mr-auto">
            Zobacz wszystkie sprzęty
          </Button>
        </Link>
      </div>
      <ul className="flex flex-row flex-wrap gap-[40px]">
        {products.map(
          (product) =>
            product.fields.isHighlighted && (
              <RecommendedProductCard
                key={product.sys.id}
                title={product.fields.title}
                img={product.fields.image || ""}
                href={`/produkt/${product.fields.slug}`}
              />
            )
        )}
        {/* <RecommendedProductCard
          title="Kosiarka spalinowa"
          img="/utrzymanie-ogrodu.png"
          href="#"
        />
        <RecommendedProductCard
          title="Kosiarka spalinowa"
          img="/utrzymanie-ogrodu.png"
          href="#"
        />
        <RecommendedProductCard
          title="Kosiarka spalinowa"
          img="/utrzymanie-ogrodu.png"
          href="#" */}
        {/* /> */}
      </ul>
    </section>

    //     <div
    //   className={`self-stretch h-[1051px] relative mt-[-240px] text-left text-26xl text-white font-lato ${className}`}
    // >
    //   <img
    //     className="absolute top-[0px] left-[1322px] w-[318px] h-[318px] object-contain z-[2]"
    //     loading="lazy"
    //     alt=""
    //     src="/rentsignhanddrawnoutlinedoodleiconrealestateadvertisinghouserentpropertyconceptvectorphotoroom-1@2x.png"
    //   />
    //   <div className="absolute top-[240px] left-[-21px] w-[1700px] h-[811px] z-[3]">
    //     <div className="absolute h-full top-[0px] bottom-[0px] left-[21px] bg-forestgreen-300 w-[1600px]">
    //       <div className="absolute top-[0px] left-[0px] bg-forestgreen-300 w-full h-full hidden" />
    //       <img
    //         className="absolute h-full top-[0px] bottom-[0px] left-[-21px] max-h-full w-[1700px] object-cover z-[1]"
    //         alt=""
    //         src="/pngtreepattern-background-design-3702431photoroom-1@2x.png"
    //       />
    //     </div>
    //     <div className="absolute top-[0px] left-[0px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0),_rgba(0,_153,_65,_0.05))] w-full h-full z-[2]" />
    //     <h1 className="m-0 absolute top-[126px] left-[158px] text-inherit font-black font-inherit z-[4] mq450:text-8xl mq850:text-17xl">
    //       Polecamy
    //     </h1>
    //     <div className="absolute top-[100px] left-[158px] rounded-81xl bg-white w-[16.5px] h-[11px] z-[4]" />
    //     <div className="absolute top-[100px] left-[177.8px] rounded-81xl bg-white w-[43.6px] h-[11px] z-[4]" />
    //     <div className="absolute top-[100px] left-[224.7px] rounded-81xl bg-white w-[73.3px] h-[11px] z-[4]" />
    //     <button className="cursor-pointer [border:none] py-4 px-[37px] bg-white absolute top-[121px] left-[1188.5px] rounded-11xl flex flex-row items-center justify-center whitespace-nowrap z-[4] hover:bg-gainsboro-100">
    //       <div className="relative text-lg font-semibold font-poppins text-forestgreen-300 text-left">
    //         Pokaż całe wyposażenie
    //       </div>
    //     </button>
    //     <div className="absolute top-[260px] left-[158px] w-[1326px] grid flex-row items-center justify-start gap-[30px] max-w-full grid-cols-[repeat(3,_minmax(316px,_1fr))] z-[4] text-5xl font-poppins mq850:grid-cols-[minmax(316px,_1fr)] mq1225:justify-center mq1225:grid-cols-[repeat(2,_minmax(316px,_549px))]">
    //       <GroupComponent6
    //         trailerFor500KGSoilCompac="Trailer for 500 kG Soil Compactor"
    //         rectangle34624742="/rectangle-34624742@2x.png"
    //         zLDoba="60,00 ZL/Doba"
    //         showRectangleIcon
    //       />
    //       <GroupComponent6
    //         trailerFor500KGSoilCompac="Kosiarka spalinowa 520 VS-H"
    //         rectangle34624742="/rectangle-346247421@2x.png"
    //         zLDoba="50,00 ZL/Doba"
    //         showRectangleIcon={false}
    //       />
    //       <GroupComponent6
    //         trailerFor500KGSoilCompac="Trailer for 500 kG Soil Compactor"
    //         rectangle34624742="/rectangle-346247422@2x.png"
    //         zLDoba="110,00 ZL/Doba"
    //         showRectangleIcon={false}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
