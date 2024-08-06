export default function SectionTitle({ children, isAlignedLeft, isWhite }) {
  return (
    <>
      <div
        className={`font-lato w-full flex flex-col ${
          isAlignedLeft ? "items-start" : "items-center"
        }  mx-auto `}
      >
        <div className="flex gap-2 items-center justify-center">
          <div
            className={`rounded-81xl ${
              isWhite ? "bg-white" : "bg-forestgreen-300"
            } w-[25px] h-[11px] z-[8]`}
          />
          <div
            className={`rounded-81xl ${
              isWhite ? "bg-white" : "bg-forestgreen-300"
            } w-[66px] h-[11px] z-[8]`}
          />
          <div
            className={`rounded-81xl ${
              isWhite ? "bg-white" : "bg-forestgreen-300"
            } w-[111px] h-[11px] z-[8]`}
          />
        </div>
        <h2 className={`text-left ${isWhite ? "text-white" : "text-black"}`}>
          {children}
        </h2>
      </div>
    </>
  );
}
