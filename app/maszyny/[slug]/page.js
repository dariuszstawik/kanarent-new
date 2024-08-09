import { client } from "@/lib/contentful/client";
import Button from "../../components/button";
import CategorySection from "../../components/category-section";
import HowToRentSection from "../../components/how-to-rent-section";
import PageHeader from "../../components/page-header";
import ProductCard from "../../components/product-card";
import SectionTitle from "../../components/section-title";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

export const runtime = "edge";

export const dynamicParams = false;

// export async function generateStaticParams() {
//   const res = await client.getEntries({ content_type: "category" });

//   return res.items.map((post) => ({
//     slug: post.slug,
//   }));
// }

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "category" });

  return res.items.map((post) => ({
    slug: post.fields.slug, // upewnij się, że zwracasz właściwe pole
  }));
}

async function getContntfulContent(slug) {
  const res = await client.getEntries({
    content_type: "category",
    "fields.slug": slug,
  });
  return res.items[0];
}

async function getContentfulContent() {
  const resCategories = await client.getEntries({
    content_type: "category",
  });

  const resProducts = await client.getEntries({
    content_type: "product",
  });
  return { categories: resCategories.items, products: resProducts.items };
}

// async function getContentfulContent() {
//   const resCategories = await client.getEntries({
//     content_type: "category",
//   });

//   const resProducts = await client.getEntries({
//     content_type: "product",
//   });
//   return resProducts.items;
// }
export default async function Maszyny({ params }) {
  const { slug } = params;
  const category = await getContntfulContent(slug);
  // const products = await getContentfulContent();
  const categories = (await getContentfulContent()).categories;
  const products = (await getContentfulContent()).products;

  return (
    <>
      <Navbar />
      <PageHeader title="Sprzęt do wypożyczenia" />
      <div className="w-[80%] mx-auto">
        <div className="w-full flex flex-col gap-2 lg:flex-row lg:justify-between">
          <SectionTitle isAlignedLeft>
            {category.fields.categoryName}
          </SectionTitle>

          <Button className="mt-auto min-w-[250px] mr-auto">
            <Link href="/#sprzet">Zobacz pozostałe kategorie</Link>
          </Button>
        </div>
        <ul className="w-full grid grid-cols-1 lg:grid-cols:2 xl:grid-cols-3 gap-[40px] mx-auto my-16">
          {products.map(
            (product) =>
              product.fields.kategoria.fields.categoryName ===
                category.fields.categoryName && (
                <ProductCard
                  key={product.sys.id}
                  title={product.fields.title}
                  img={product.fields.image || ""}
                  price={product.fields.price || ""}
                  href={`/produkt/${product.fields.slug}`}
                />
              )
          )}
          {/* <ProductCard
            title="Kosiarka spalinowa"
            img="/utrzymanie-ogrodu.png"
            href="#"
          />
          <ProductCard
            title="Kosiarka spalinowa"
            img="/utrzymanie-ogrodu.png"
            href="#"
          />
          <ProductCard
            title="Kosiarka spalinowa"
            img="/utrzymanie-ogrodu.png"
            href="#"
          /> */}
        </ul>
        {/* <HowToRentSection /> */}
        {/* <CategorySection categories={categories} products={products} /> */}
        {/* 
        <div className="w-full flex justify-between">
          <SectionTitle isAlignedLeft>
            {category.fields.categoryName}
          </SectionTitle>
          <Button className="mt-auto min-w-[250px]">
            Zobacz wszystkie kategorie
          </Button>
        </div>
        <CategorySection categories={categories} />
         */}
      </div>
    </>
  );
}
