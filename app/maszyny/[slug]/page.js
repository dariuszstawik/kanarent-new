import { client } from "@/lib/contentful/client";
import Button from "../../components/button";
import CategorySection from "../../components/category-section";
import HowToRentSection from "../../components/how-to-rent-section";
import PageHeader from "../../components/page-header";
import ProductCard from "../../components/product-card";
import SectionTitle from "../../components/section-title";
import Navbar from "@/app/components/navbar";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "category" });

  return res.items.map((post) => ({
    slug: post.slug,
  }));
}
async function getContntfulContent(slug) {
  const res = await client.getEntries({
    content_type: "category",
    "fields.slug": slug,
  });
  return res.items[0];
}

// async function getContentfulNewsPosts(locale) {
//   const res = await client.getEntries({
//     content_type: "news",
//     locale: locale,
//   });
//   return res.items;
// }

async function getContentfulContent() {
  // const resCategories = await client.getEntries({
  //   content_type: "category",
  // });

  const resProducts = await client.getEntries({
    content_type: "product",
  });
  return resProducts.items;
}
export default async function Maszyny({ params }) {
  const { slug } = params;
  const category = await getContntfulContent(slug);
  const products = await getContentfulContent();
  // const categories = (await getContentfulContent()).categories;
  // const products = (await getContentfulContent()).products;

  return (
    <>
      <Navbar />
      <PageHeader title="Sprzęt do wypożyczenia" />
      <div className="w-[80%] mx-auto">
        <div className="w-full flex justify-between mb-8">
          <SectionTitle isAlignedLeft>
            {category.fields.categoryName}
          </SectionTitle>
          <Button className="mt-auto min-w-[250px]">
            Zobacz wszystkie kategorie
          </Button>
        </div>
        <ul className="w-full grid grid-cols-1 lg:grid-cols:2 xl:grid-cols-3 gap-[40px] mx-auto">
          {products.map(
            (product) =>
              product.fields.kategoria.fields.categoryName ===
                category.fields.categoryName && (
                <ProductCard
                  key={product.sys.id}
                  title={product.fields.title}
                  img={product.fields.image || ""}
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
      </div>
    </>
  );
}
