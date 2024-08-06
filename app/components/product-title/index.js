export default function ProductTitle({ children, isAlignedLeft, isWhite }) {
  return (
    <>
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
