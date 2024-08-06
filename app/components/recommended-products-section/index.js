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
      </ul>
    </section>
  );
}
