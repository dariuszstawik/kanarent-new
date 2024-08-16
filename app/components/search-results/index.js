"use client";
import { useAppContext } from "@/app/context";
import PageHeader from "../page-header";
import SectionTitle from "../section-title";
import ProductCard from "../product-card";
import Navbar from "../navbar";
import Link from "next/link";
import Button from "../button";

export default function SearchResults({ products, images }) {
  const [searchResults, setSearchResults] = useAppContext();

  return (
    <>
      <Navbar />
      <PageHeader title="Wyniki wyszukiwania" />
      <section className="w-[80%] mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between mb-16 ">
          <SectionTitle isAlignedLeft>
            Wyniki dla frazy: {searchResults}
          </SectionTitle>
          <Link href="/">
            <Button isWhite className="mt-4 min-w-[300px] mr-auto">
              &lt; Wróć do strony głównej
            </Button>
          </Link>
        </div>
        {/* <SectionTitle>Wyniki dla frazy: {searchResults}</SectionTitle>
        <Link href="/" className="mx-auto">
          Wróć do strony głównej
        </Link> */}

        <ul className="w-full grid grid-cols-1 lg:grid-cols:2 xl:grid-cols-3 gap-[40px] mx-auto my-16">
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
                  img={images.find(
                    (image) => image.sys.id === product.fields.image.sys.id
                  )}
                  href={`produkt/${product.fields.slug}`}
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
