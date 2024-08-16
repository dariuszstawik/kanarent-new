import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PageHeader from "@/app/components/page-header";
import ProductTemplate from "@/app/components/product-template";
import Navbar from "@/app/components/navbar";

export const runtime = "edge";

export const dynamicParams = false;

export async function generateStaticParams() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_KEY;

  const res = await fetch(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=category`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await res.json();

  return data.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

async function getContentfulContent(slug) {
  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_KEY;

    const res = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=product&fields.slug=${slug}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data from Contentful");
    }

    const data = await res.json();
    return data.items[0];
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return null;
  }
}

async function getAllContentfulData() {
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

export default async function Produkt({ params }) {
  const { slug } = params;
  const product = await getContentfulContent(slug);
  const { categories, products, assets } = await getAllContentfulData();
  const images = assets.filter((asset) => asset.fields.file.url);

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
        img={images.find(
          (image) => image.sys.id === product.fields.image.sys.id
        )}
        price={product.fields.price}
      />
    </>
  );
}
