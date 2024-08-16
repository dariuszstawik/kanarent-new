import SearchResults from "../components/search-results";

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

export default async function WynikiWyszukiwania() {
  const { categories, products, assets } = await getContentfulContent();

  const images = assets.filter((asset) => asset.fields.file.url);
  return (
    <SearchResults
      products={products}
      categories={categories}
      images={images}
    />
  );
}
