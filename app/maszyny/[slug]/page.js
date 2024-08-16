import Button from "../../components/button";
import PageHeader from "../../components/page-header";
import ProductCard from "../../components/product-card";
import SectionTitle from "../../components/section-title";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

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
      `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=category&fields.slug=${slug}`,
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

export default async function Maszyny({ params }) {
  const { slug } = params;
  const category = await getContentfulContent(slug);
  const { categories, products, assets } = await getAllContentfulData();
  const images = assets.filter((asset) => asset.fields.file.url);

  if (!category) {
    return <div>Category not found</div>;
  }

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
        <ul className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[40px] mx-auto my-16">
          {products
            .filter(
              (product) => product.fields.kategoria.sys.id === category.sys.id
            )
            .map((product) => (
              <ProductCard
                key={product.sys.id}
                title={product.fields.title}
                img={images.find(
                  (image) => image.sys.id === product.fields.image.sys.id
                )}
                price={product.fields.price || ""}
                href={`/produkt/${product.fields.slug}`}
              />
            ))}
        </ul>
      </div>
    </>
  );
}
