export default function Review() {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start relative gap-[62px] min-w-[316px] max-w-full text-center text-lg text-dimgray font-lato mq450:gap-[31px]`}
    >
      <div className="self-stretch shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.1)] rounded-tl-none rounded-tr-11xl rounded-b-none bg-white box-border flex flex-col items-start justify-start pt-[50px] px-[29px] pb-[90px] relative gap-[30px] max-w-full border-r-[2px] border-solid border-forestgreen-300 mq450:gap-[15px] mq450:pt-8 mq450:pb-[58px] mq450:box-border">
        <div className="w-[422px] h-[440px] relative shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.1)] rounded-tl-none rounded-tr-11xl rounded-b-none bg-white box-border hidden max-w-full z-[0] border-r-[2px] border-solid border-forestgreen-300" />
        <div className="w-full h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.1)] rounded-tl-none rounded-tr-11xl rounded-b-none bg-white box-border z-[1] border-b-[2px] border-solid border-forestgreen-300" />
        <div className="self-stretch flex flex-row items-start justify-center">
          <img
            className="h-[60px] w-[100px] relative z-[2]"
            loading="lazy"
            alt=""
            src="/group-1000009510.svg"
          />
        </div>
        <div className="self-stretch relative leading-[30px] z-[2]">
          Wypożyczyłem glebogryzarkę i niwelator. Sprzęt dostarczony na miejsce
          wraz z przeszkoleniem z obsługi. Sprzęt się sprawdził, trawniczek już
          kiełkuje. Po zakończeniu prac bezproblemowy odbiór i tu uwaga.. Pan
          przyjechał w niedzielę ! Tak, więc pełna elastyczność pod klienta!
          Szacun! Już planuję wypożyczenie mini koparki do przekopania odpływu.
        </div>
        <div className="self-stretch flex flex-row items-start justify-center">
          {/* <img
            className="h-[30px] w-[150px] relative z-[2]"
            loading="lazy"
            alt=""
            src="/group1000009511.svg"
          /> */}
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5 text-black font-poppins">
            <div className="flex flex-col items-end justify-start">
              <b className="relative leading-[30px] inline-block min-w-[86px]">
                John Doe
              </b>
              <div className="flex flex-row items-start justify-end py-0 pr-[18px] pl-[19px] text-dimgray">
                <div className="relative leading-[30px] inline-block min-w-[49px]">
                  Klient
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        className="w-[82px] h-[82px] absolute !m-[0] bottom-[80px] left-[calc(50%_-_41px)] rounded-[50%] object-cover z-[2]"
        loading="lazy"
        alt=""
        src={testimonialNavigationDots}
      /> */}
    </div>
  );
}
