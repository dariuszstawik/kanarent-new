"use client";
import { useAppContext } from "@/app/context";
import PageHeader from "../page-header";
import SectionTitle from "../section-title";
import ProductCard from "../product-card";

export default function SearchResults({ products, categories }) {
  const [searchResults, setSearchResults] = useAppContext();

  return (
    <>
      <PageHeader title="Wyniki wyszukiwania" />
      <section className="w-[80%] mx-auto">
        <SectionTitle>Wyniki wyszukiwania</SectionTitle>
        <h2>wyszukiwanie: {searchResults}</h2>
        <ul className="w-full grid grid-cols-1 lg:grid-cols:2 xl:grid-cols-3 gap-[40px] mx-auto">
          {products &&
            searchResults &&
            products
              .filter((product) =>
                product.fields.title
                  .toUpperCase()
                  .includes(searchResults.toUpperCase())
              )
              .map((product) => (
                <ProductCard
                  key={product.sys.id}
                  title={product.fields.title}
                  img={product.fields.image || ""}
                  href={`/produkt/${product.fields.slug}`}
                />
              ))}
        </ul>
        {/* <form>
          <input></input>
        </form> */}
      </section>
    </>
  );
}
