import Image from "next/image";
import Iframe from "react-iframe";
import Logo from "../logo";
import Link from "next/link";
import footerData from "./footerData";

export default function Footer() {
  return (
    <section>
      <div
        className="relative w-full px-4 py-8 sm:px-8 md:px-16 lg:px-32 lg:py-16 flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-[50px] text-whitesmoke-100 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-80"
        style={{
          backgroundImage: 'url("/footer-back.jpg")',
          backgroundPosition: "right bottom",
        }}
      >
        <div className="w-full lg:w-[360px] z-20">
          <Logo className="mt-2 mb-[16px]" />
          <div className="leading-relaxed">
            Wypożyczalnia sprzętu KanaRent oferuje wynajem sprzętu ogrodniczego,
            małego sprzętu budowlanego, narzędzi elektrycznych i
            akumulatorowych.
          </div>
          <div className="mt-6 flex justify-center items-center h-[37px] w-[37px] rounded-3xs box-border border-[1px] border-solid border-forestgreen-300 z-20">
            <img className="w-[19px] h-[19px]" alt="" src="/vector-13.svg" />
          </div>
        </div>
        <div className="w-full lg:w-[360px] z-20">
          <h3 className="mb-2">Szybkie linki</h3>
          <img src="/footer-underline.svg" alt="underline" className="mb-6" />
          <ul className="list-none flex flex-col gap-2">
            {footerData.map(({ title, path }, index) => (
              <li key={index} className="flex items-center leading-relaxed">
                <span className="pr-2">
                  <img src="/li-asset.svg" alt="li-asset" />
                </span>
                <Link href={`/${path}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-[360px] z-20">
          <h3 className="mb-2">Mapa</h3>
          <img
            src="/footer-underline.svg"
            alt="underline"
            className="mb-[16px]"
          />
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.843595537739!2d19.119387076587202!3d50.44401387159107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471729e5773e3fcb%3A0x175ebcbcae4a61a6!2sWolno%C5%9Bci%2094%2C%2042-460%20Mierz%C4%99cice!5e0!3m2!1spl!2spl!4v1721912064604!5m2!1spl!2spl"
            width="100%"
            height="221"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="w-full h-20 flex justify-center items-center bg-forestgreen-300 text-white">
        © 2024 Kana Rent. All rights reserved. Created by{" "}
        <a
          href="https://stronyjaksiepatrzy.pl"
          target="_blank"
          className="pl-2 underline"
        >
          Strony jak się patrzy
        </a>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import Iframe from "react-iframe";
// import Logo from "../logo";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <section>
//       <div
//         className="relative w-screen px-32 py-16 flex flex-row flex-wrap gap-[50px] text-whitesmoke-100 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-80"
//         style={{
//           backgroundImage: 'url("/footer-back.jpg")',
//           backgroundPosition: "right bottom",
//         }}
//       >
//         {/* <div
//       className="mt-28 relative w-screen px-32 py-32 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-darkBlue after:opacity-85"
//       // className="mt-28 relative w-screen px-32 py-28 bg-primaryBlue flex"
//       style={{
//         backgroundImage: 'url("/header3.jpg")',
//         backgroundPosition: "center",
//       }} */}

//         <div className="w-[360px] z-20">
//           {/* <Image
//           src="/logo-horizontal.svg"
//           alt="logo"
//           width={295}
//           height={81}
//           className="mt-6 mb-[16px]"
//         /> */}
//           <Logo className="mt-2 mb-[16px]" />
//           <div className="leading-relaxed">
//             Wypożyczalnia sprzętu KanaRent oferuje wynajem sprzętu ogrodniczego,
//             małego sprzętu budowlanego, narzędzi elektrycznych i
//             akumulatorowych.
//           </div>
//           <div className="mt-6 flex justify-center items-center h-[37px] w-[37px] rounded-3xs box-border border-[1px] border-solid border-forestgreen-300 z-20">
//             <img className="w-[19px] h-[19px]" alt="" src="/vector-13.svg" />
//           </div>
//         </div>
//         <div className="w-[360px] z-20">
//           <h3 className="mb-2">Szybkie linki</h3>
//           <img src="/footer-underline.svg" alt="underline" className="mb-6" />
//           <ul className="list-none flex flex-col gap-2">
//             <li className="flex items-center leading-relaxed">
//               <span className="pr-2">
//                 <img src="/li-asset.svg" alt="li-asset" />
//               </span>
//               <Link href="">Sprzęt</Link>
//             </li>
//             <li className="flex items-center leading-relaxed">
//               <span className="pr-2">
//                 <img src="/li-asset.svg" alt="li-asset" />
//               </span>
//               <Link href="">Jak wynająć</Link>
//             </li>
//             <li className="flex items-center leading-relaxed">
//               <span className="pr-2">
//                 <img src="/li-asset.svg" alt="li-asset" />
//               </span>
//               <Link href="">Kontakt</Link>
//             </li>
//             <li className="flex items-center leading-relaxed">
//               <span className="pr-2">
//                 <img src="/li-asset.svg" alt="li-asset" />
//               </span>
//               <Link href="">Regulamin serwisu</Link>
//             </li>
//             <li className="flex items-center leading-relaxed">
//               <span className="pr-2">
//                 <img src="/li-asset.svg" alt="li-asset" />
//               </span>
//               <Link href="">Polityka prywatności</Link>
//             </li>
//             <li className="flex items-center leading-relaxed">
//               <span className="pr-2">
//                 <img src="/li-asset.svg" alt="li-asset" />
//               </span>
//               <Link href="">Obowiązek informacyjny RODO</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="w-[360px] z-20">
//           <h3 className="mb-2">Mapa</h3>
//           <img
//             src="/footer-underline.svg"
//             alt="underline"
//             className="mb-[16px]"
//           />
//           <Iframe
//             url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.843595537739!2d19.119387076587202!3d50.44401387159107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471729e5773e3fcb%3A0x175ebcbcae4a61a6!2sWolno%C5%9Bci%2094%2C%2042-460%20Mierz%C4%99cice!5e0!3m2!1spl!2spl!4v1721912064604!5m2!1spl!2spl"
//             width="485"
//             height="221"
//             style="border:0;"
//             allowfullscreen=""
//             loading="lazy"
//             referrerpolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       </div>
//       <div className="w-full h-20 flex justify-center items-center bg-forestgreen-300 text-white">
//         © 2024 Kana Rent. All rights reserved. Created by{" "}
//         <a
//           href="https://stronyjaksiepatrzy.pl"
//           target="_blank"
//           className="pl-2 underline"
//         >
//           Strony jak się patrzy
//         </a>
//       </div>
//     </section>
//   );
// }
