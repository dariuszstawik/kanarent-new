import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PageHeader from "@/app/components/page-header";
import ProductTemplate from "@/app/components/product-template";
import Navbar from "@/app/components/navbar";
import HowToRentSection from "@/app/components/how-to-rent-section";
import ContactSection from "@/app/components/contact-section";

export const runtime = "edge";

export const dynamicParams = false;

// export async function generateStaticParams() {
//   const res = await client.getEntries({
//     content_type: "product",
//   });
//   return res.items.map((post) => ({
//     slug: post.slug,
//   }));
// }

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "product" });

  return res.items.map((post) => ({
    slug: post.fields.slug, // upewnij się, że zwracasz właściwe pole
  }));
}

async function getContentfulContent(slug) {
  const res = await client.getEntries({
    content_type: "product",
    "fields.slug": slug,
  });
  return res.items[0];
}

export default async function Produkt({ params }) {
  const { slug } = params;
  const product = await getContentfulContent(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <PageHeader title="Sprzęt do wypożyczenia" />
      <ProductTemplate
        title={product.fields.title}
        body={documentToReactComponents(product.fields.body)}
        img={product.fields.image || ""}
        price={product.fields.price}
      />
      {/* <HowToRentSection />
      <ContactSection /> */}
    </>
  );
}
