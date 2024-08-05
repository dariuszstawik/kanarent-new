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
        {/* <img
          src="/digger-cropped.png"
          alt="digger"
          className="absolute right-[30%] -bottom-[58%] z-200 object-bottom"
        /> */}
      </div>
      {/* <div
        className="relative z-30 w-3/5 h-full bg-forestgreen-300 opacity-70 pl-28 pr-10 border-r-4 border-r-white"
        // style={{ clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)" }}
      > */}
      <img
        src="/hero-rectangle-with-line.svg"
        alt="rectangle"
        className="relative z-20 h-full"
      />
      <img
        src="/left-white-triangle.svg"
        alt="triangle"
        className="absolute bottom-0 left-0 z-30 w-[100px] h-[100px]"
      />

      {/* <img
        src="hero-rectangle-line.svg"
        alt="rectangle"
        className="absolute top-0 right-0
        z-40"
      /> */}
      {/* <div className="absolute top-0 right-0 h-full w-[10px] bg-white transform origin-top-right rotate-[30deg]" />
        <div
          className="absolute top-0 right-0 bottom-0 w-[4px]"
          style={{
            background:
              "linear-gradient(to bottom right, transparent 0%, white 30%, white 70%, transparent 100%)",
            transform: "translateX(100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        ></div> */}
      {/* <div
          className="absolute top-0 left-0 w-[4px] h-full bg-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
            transform: "translateX(100%)",
          }}
        /> */}
      {/* <div className="absolute top-0 left-full h-full w-[10px] bg-white rotate-[35deg] -translate-x-10" /> */}
      <div className="absolute top-[25%] left-[5%] w-full h-full z-40">
        <h1 className="text-4xl text-white">
          Wypożyczalnia sprzętu
          <span className="block">budowlanego i ogrodnicznego</span>
          <span className="block opacity-70">&gt; Będzin i okolice</span>
        </h1>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}

// export default function HeroSection() {
//   return (
//     <div className="relative pt-28 w-screen h-screen">
//       <div className="absolute inset-0 w-full h-full overflow-hidden">
//         <img
//           src="/hero-img2.jpg"
//           alt="hero"
//           className="absolute w-full h-full object-cover object-bottom"
//         />
//         <img
//           src="/digger-cropped.png"
//           alt="hero"
//           className="absolute left-0 bottom-0 object-bottom z-20"
//         />
//       </div>
//       <div className="w-1/2 bg-forestgreen-300 opacity-60">
//         <h1 className="text-4xl">
//           Wypożyczalnia sprzętu
//           <span className="block">budowlanego i ogrodnicznego</span>
//           <span className="block">Będzin i okolice</span>
//         </h1>
//       </div>
//     </div>
//   );
// }

// // export default function HeroSection() {
// //   return (
// //     <div className="relative pt-28 w-screen h-screen">
// //       <div className="absolute right-0 bottom-0 w-full h-screen overflow-hidden">
// //         <img
// //           src="/hero-img2.jpg"
// //           alt="hero"
// //           className="right-0 bottom-0 w-full object-cover object-bottom"
// //         />
// //       </div>
// //       <div className="w-1/2 bg-forestgreen-300 opacity-60">
// //         <h1 className="text-4xl">
// //           Wypożyczalnia sprzętu
// //           <span className="block">budowlanego i ogrodnicznego</span>
// //           <span className="block">Będzin i okolice</span>
// //         </h1>
// //       </div>
// //     </div>
// //   );
// // }
