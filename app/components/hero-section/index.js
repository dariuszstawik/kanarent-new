import SearchBar from "../search-bar";

export default function HeroSection() {
  return (
    <div className="relative pt-28 w-screen h-screen font-lato" id="top">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/hero-img2.jpg"
          alt="hero"
          className="w-full h-full object-cover object-bottom z-10"
        />
      </div>
      <div
        className="darkOverlay relative z-30 w-[70%] h-full bg-gray-700 opacity-90 pl-28 pr-10 hidden xl:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
      >
        <div className="pt-28 pr-16 w-full h-full z-40">
          <h1 className=" text-white">
            Wypożyczalnia sprzętu
            <span className="block">budowlanego i ogrodnicznego</span>
            <span className="block opacity-70">&gt; Będzin i okolice</span>
          </h1>
          <SearchBar></SearchBar>
        </div>
      </div>
      <div className="darkOverlay relative z-30 w-[100%] h-full bg-gray-700 opacity-90 xl:hidden">
        <div className="w-full h-full flex flex-col items-center justify-center z-40">
          <h1 className="text-3xl text-white text-center">
            Wypożyczalnia sprzętu
            <span className="block">budowlanego i ogrodnicznego</span>
            <span className="block opacity-70">&gt; Będzin i okolice</span>
          </h1>
          <SearchBar></SearchBar>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-36 h-36 bg-forestgreen-300 z-30"
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
      />
      <div
        className="absolute top-28 right-0 z-30 w-36 h-36 bg-forestgreen-300"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
        }}
      />
      ;
    </div>
  );
}
