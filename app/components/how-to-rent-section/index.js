import HowToRentStep from "../how-to-rent-step";
import SectionTitle from "../section-title";

export default function HowToRentSection() {
  return (
    <div
      className={`self-stretch bg-whitesmoke-100 flex flex-col items-center justify-start pt-[100px] pb-28 pr-[21px] pl-5 box-border relative gap-[60px] max-w-full mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq850:gap-[30px] mq850:pt-[65px] mq850:pb-[65px] mq850:box-border`}
      id="jak-wypozyczyc"
    >
      {/* <div className="w-[1600px] h-[822px] relative bg-whitesmoke-100 hidden max-w-full z-[0]" /> */}
      <SectionTitle>Jak wypożyczyć sprzęt?</SectionTitle>
      <div className="w-[1325px] flex flex-row flex-wrap items-start justify-center gap-[31px] max-w-full z-[1] mq850:gap-[15px]">
        <HowToRentStep
          content="Skontaktuj się z nami aby ustalić dostępność sprzętu w wybranym terminie oraz określić sposób jego odebrania, dostarczenia."
          img="/hugeiconscontact02.svg"
          //   propWidth="unset"
          //   propFlex="1"
          //   propMinWidth="316px"
        />
        <HowToRentStep
          content="Przy odbiorze sprzętu sprawdź jego stan, podpisz przygotowaną przez nas umowę oraz wpłać kaucję, którą oddamy podczas zwrotu."
          img="/materialsymbolscontractoutline.svg"
          //   propWidth="unset"
          //   propFlex="1"
          //   propMinWidth="316px"
        />
        <HowToRentStep
          content="W ustalonym terminie i miejscu zwróć pożyczony sprzęt. Jeżeli jego stan nie będzie pogorszony otrzymasz zwrot kaucji."
          img="/iconparkoutlinereturn.svg"
          //   propWidth="unset"
          //   propFlex="1"
          //   propMinWidth="316px"
        />
      </div>
      <div className="w-[1325px] flex flex-row items-start justify-center py-0 pr-0 pl-0.5 box-border max-w-full">
        <button className="cursor-pointer [border:none] py-4 px-[37px] bg-forestgreen-300 rounded-11xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-mediumseagreen-200">
          <div className="relative text-lg font-semibold font-poppins text-white text-left">
            Regulamin serwisu
          </div>
        </button>
      </div>
      <img
        className="w-[402px] h-[211px] absolute !m-[0] top-[-156px] left-0 object-contain z-[2]"
        loading="lazy"
        alt=""
        src="/digger-asset10.png"
      />
      <img
        className="absolute !m-[0] -bottom-[85px] right-[30px] object-contain z-[2] hidden xl:block"
        loading="lazy"
        alt=""
        src="/for-rent.png"
      />
    </div>

    // <section
    //   className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-5xl text-black font-lato`}
    // >
    //   <img
    //     className="h-[119px] w-[119px] absolute !m-[0] right-[-17px] bottom-[-29px] object-contain z-[1]"
    //     loading="lazy"
    //     alt=""
    //     src="/rentsignhanddrawnoutlinedoodleiconrealestateadvertisinghouserentpropertyconceptvectorphotoroom-11@2x.png"
    //   />
    //   <div className="flex-1 bg-whitesmoke-100 flex flex-col items-start justify-start py-20 px-4 box-border gap-[40px] max-w-full">
    //     <div className="w-[375px] h-[1214px] relative bg-whitesmoke-100 hidden max-w-full" />
    //     <div className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-2.5">
    //       <div className="flex-1 flex flex-col items-start justify-start gap-[10.3px]">
    //         <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[68px] pl-[69px]">
    //           <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[3px]">
    //             <div className="h-[6.5px] w-[57px] relative">
    //               <div className="absolute top-[0px] left-[0px] rounded-81xl bg-forestgreen-300 w-[14.9px] h-[6.5px] z-[1]" />
    //               <div className="absolute top-[0px] left-[17.8px] rounded-81xl bg-forestgreen-300 w-[39.2px] h-[6.5px] z-[1]" />
    //             </div>
    //             <div className="h-[6.5px] flex-1 relative rounded-81xl bg-forestgreen-300 min-w-[43px] z-[1]" />
    //           </div>
    //         </div>
    //         <h3 className="m-0 relative text-inherit leading-[30px] font-black font-inherit z-[1]">
    //           <span>{`Jak wypożyczyć sprzęt `}</span>
    //           <span className="text-forestgreen-300">?</span>
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full z-[1] text-center text-base text-dimgray font-poppins">
    //       <HowToRentStep
    //         content="Skontaktuj się z nami aby ustalić dostępność sprzętu w wybranym
    //       terminie oraz określić sposób jego odebrania, dostarczenia."
    //         img="/hugeiconscontact021.svg"
    //       />
    //       <HowToRentStep
    //         content="Przy odbiorze sprzętu sprawdź jego stan, podpisz przygotowaną przez nas umowę oraz wpłać kaucję, którą oddamy podczas zwrotu."
    //         img="/materialsymbolscontractoutline1.svg"
    //       />
    //       <HowToRentStep
    //         content="W ustalonym terminie i miejscu zwróć pożyczony sprzęt. Jeżeli jego stan nie będzie pogorszony otrzymasz zwrot kaucji."
    //         img="/iconparkoutlinereturn1.svg"
    //       />
    //     </div>
    //     <div className="self-stretch flex flex-row items-start justify-start py-0 px-[57px]">
    //       <button className="cursor-pointer [border:none] py-4 px-[37px] bg-forestgreen-300 flex-1 rounded-11xl flex flex-row items-start justify-start whitespace-nowrap z-[2]">
    //         <div className="relative text-base font-semibold font-poppins text-white text-left">
    //           Regulamin serwisu
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    // </section>
  );
}
