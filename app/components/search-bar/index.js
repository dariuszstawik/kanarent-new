"use client";

import { useAppContext } from "@/app/context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchResults, setSearchResults] = useAppContext();
  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchResults(e.target.q.value);
    router.push(`/wyniki-wyszukiwania`);
    console.log(e.target.q.value);
  };

  console.log(searchResults);

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <div className="relative w-full xl:w-3/5 h-20 rounded-full mt-10">
        <input
          id="q"
          name="q"
          className="w-full h-full rounded-full text-forestgreen-300 text-xl p-8 placeholder-color-forestgreen-300 placeholder-forestgreen-300"
          placeholder="Wyszukaj sprzęt"
        ></input>

        <button
          type="submit"
          //   href="/wyniki-wyszukiwania"
          className="absolute right-[5px] top-[50%] -translate-y-[50%] w-[66px] h-[66px] bg-forestgreen-300 rounded-full flex justify-center items-center"
        >
          <img src="/search-icon.svg" alt="search" />
        </button>
      </div>
    </form>
  );
}
