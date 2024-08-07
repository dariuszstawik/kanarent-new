import Image from "next/image";
import CategorySection from "./components/category-section";
import HowToRentSection from "./components/how-to-rent-section";
import RecommendedProductsSection from "./components/recommended-products-section";
import ContactSection from "./components/contact-section";
import Review from "./components/review";
import HeroSection from "./components/hero-section";
import { client } from "@/lib/contentful/client";
import NavbarHomepage from "./components/navbar-homepage";
import Footer from "./components/footer";

export const runtime = "edge";

export const dynamicParams = false;

async function getContentfulContent() {
  const resCategories = await client.getEntries({
    content_type: "category",
  });

  const resProducts = await client.getEntries({
    content_type: "product",
  });
  return { categories: resCategories.items, products: resProducts.items };
}

export default async function Home() {
  const categories = (await getContentfulContent()).categories;
  const products = (await getContentfulContent()).products;

  return (
    <>
      <NavbarHomepage />
      <HeroSection />
      <CategorySection categories={categories} products={products} />
      <HowToRentSection />
      <RecommendedProductsSection products={products} />
      <ContactSection />
    </>
  );
}
