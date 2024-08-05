import { client } from "@/lib/contentful/client";
import SearchResults from "../components/search-results";

async function getContentfulContent() {
  const resCategories = await client.getEntries({
    content_type: "category",
  });

  const resProducts = await client.getEntries({
    content_type: "product",
  });
  return { categories: resCategories.items, products: resProducts.items };
}

export default async function WynikiWyszukiwania() {
  const categories = (await getContentfulContent()).categories;
  const products = (await getContentfulContent()).products;
  return <SearchResults products={products} categories={categories} />;
}
