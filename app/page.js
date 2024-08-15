import Image from "next/image";
import CategorySection from "./components/category-section";
import HowToRentSection from "./components/how-to-rent-section";
import RecommendedProductsSection from "./components/recommended-products-section";
import ContactSection from "./components/contact-section";
import Review from "./components/review";
import HeroSection from "./components/hero-section";
import NavbarHomepage from "./components/navbar-homepage";
import Footer from "./components/footer";

export const runtime = "edge";
export const dynamicParams = false;

async function getContentfulContent() {
  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_KEY;

    const resCategories = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=category`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const resProducts = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=product`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const resAssets = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets?`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!resCategories.ok || !resProducts.ok || !resAssets.ok) {
      throw new Error("Failed to fetch data from Contentful");
    }

    const categoriesData = await resCategories.json();
    const productsData = await resProducts.json();
    const assetsData = await resAssets.json();

    return {
      categories: categoriesData.items,
      products: productsData.items,
      assets: assetsData.items,
    };
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return {
      categories: [],
      products: [],
      assets: [],
    };
  }
}

export default async function Home() {
  const { categories, products, assets } = await getContentfulContent();

  const images = assets.filter((asset) => asset.fields.file.url);

  console.log("--------");
  console.log(categories[0]);
  // console.log(products[1].fields);

  return (
    <>
      <NavbarHomepage />
      <HeroSection />
      <CategorySection
        categories={categories}
        products={products}
        images={images}
      />
      <HowToRentSection />
      <RecommendedProductsSection products={products} images={images} />
      <ContactSection />
    </>
  );
}

// import Image from "next/image";
// import CategorySection from "./components/category-section";
// import HowToRentSection from "./components/how-to-rent-section";
// import RecommendedProductsSection from "./components/recommended-products-section";
// import ContactSection from "./components/contact-section";
// import Review from "./components/review";
// import HeroSection from "./components/hero-section";
// import { client } from "@/lib/contentful/client";
// import NavbarHomepage from "./components/navbar-homepage";
// import Footer from "./components/footer";

// export const runtime = "edge";

// export const dynamicParams = false;

// async function getContentfulContent() {
//   const resCategories = await client.getEntries({
//     content_type: "category",
//   });

//   const resProducts = await client.getEntries({
//     content_type: "product",
//   });
//   return { categories: resCategories.items, products: resProducts.items };
// }

// export default async function Home() {
//   const categories = (await getContentfulContent()).categories;
//   const products = (await getContentfulContent()).products;

//   return (
//     <>
//       <NavbarHomepage />
//       <HeroSection />
//       <CategorySection categories={categories} products={products} />
//       <HowToRentSection />
//       <RecommendedProductsSection products={products} />
//       <ContactSection />
//     </>
//   );
// }
