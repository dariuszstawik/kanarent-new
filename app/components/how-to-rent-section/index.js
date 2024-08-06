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
      <div className="w-[90%] flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full z-[1] mq850:gap-[15px]">
        <HowToRentStep
          content="Skontaktuj się z nami, aby ustalić dostępność sprzętu w wybranym terminie oraz określić sposób jego odebrania, dostarczenia."
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
          content="W ustalonym terminie i miejscu zwróć wypożyczony sprzęt. Jeżeli jego stan nie będzie pogorszony, otrzymasz zwrot kaucji."
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
      {/* <img
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
      /> */}
    </div>
  );
}
