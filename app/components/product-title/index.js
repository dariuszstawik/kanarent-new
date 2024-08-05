export default function ProductTitle({ children, isAlignedLeft, isWhite }) {
  return (
    <>
      {/*  
        <div
          className={`w-[1327px] flex flex-row items-start justify-center pt-0 px-5 pb-2.5 box-border max-w-full text-left text-26xl text-black font-lato`}
        >
          <div className="w-[493px] flex flex-col items-start justify-start gap-[15px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <div className="w-[212px] flex flex-row items-start justify-start gap-[5px]">
                <div className="h-[11px] w-[25px] relative rounded-81xl bg-forestgreen-300" />
                <div className="h-[11px] w-[66px] relative rounded-81xl bg-forestgreen-300" />
                <div className="h-[11px] flex-1 relative rounded-81xl bg-forestgreen-300" />
              </div>
            </div>
            <h1 className="m-0 relative text-inherit font-black font-inherit mq450:text-8xl mq850:text-17xl">
              <span>{children}</span>
              {/* <span className="text-forestgreen-300">?</span> */}
      {/* </h1>
          </div>
        </div> */}

      <div
        className={`w-full flex flex-col ${
          isAlignedLeft ? "items-start" : "items-center"
        }  mx-auto `}
      >
        <div className="flex gap-2 items-center justify-center">
          <div
            className={`rounded-81xl ${
              isWhite ? "bg-white" : "bg-forestgreen-300"
            } w-[7px] h-[5px] z-[8]`}
          />
          <div
            className={`rounded-81xl ${
              isWhite ? "bg-white" : "bg-forestgreen-300"
            } w-[19px] h-[5px] z-[8]`}
          />
          <div
            className={`rounded-81xl ${
              isWhite ? "bg-white" : "bg-forestgreen-300"
            } w-[32px] h-[5px] z-[8]`}
          />
        </div>
        <h3 className={`text-left ${isWhite ? "text-white" : "text-black"}`}>
          {children}
        </h3>
      </div>
    </>
  );
}
