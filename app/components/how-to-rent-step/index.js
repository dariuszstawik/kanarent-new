export default function HowToRentStep({ img, content }) {
  return (
    <div
      className={`h-[353px] w-[421px] relative shrink-0 max-w-full text-center text-lg text-dimgray font-poppins`}
      //   style={groupDiv1Style}
    >
      <div className="absolute top-[185px] left-[0px] rounded-11xl bg-white box-border w-[421px] flex flex-row items-start justify-start py-[26px] px-[34px] max-w-full border-[3px] border-solid border-forestgreen-300">
        <div className="h-[168px] w-[421px] relative rounded-11xl bg-white box-border hidden max-w-full border-[3px] border-solid border-forestgreen-300" />
        <div className="flex-1 relative inline-block max-w-[95%] z-[1]">
          {content}
        </div>
      </div>
      <div className="absolute top-[0px] left-[139px] w-[143px] h-[186.5px]">
        <div className="absolute top-[0px] left-[0px] w-[143px] h-[143px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-forestgreen-400 w-full h-full" />
          <div className="absolute w-[calc(100%_-_20px)] top-[10px] right-[10px] left-[10px] h-[123px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-forestgreen-300 w-full h-full z-[1]" />
            <img
              className="absolute top-[32px] left-[31px] w-[60px] h-[60px] overflow-hidden z-[2]"
              loading="lazy"
              alt=""
              src={img}
            />
          </div>
        </div>
        <img
          className="absolute top-[132.5px] left-[72px] w-[3px] h-[54px] z-[2]"
          loading="lazy"
          alt=""
          src="/vector-6795.svg"
        />
      </div>
    </div>
  );
}
