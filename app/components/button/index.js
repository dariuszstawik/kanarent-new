export default function Button({ isWhite, children, className }) {
  return (
    <button
      className={`${
        isWhite
          ? "bg-white text-forestgreen-300"
          : "text-white bg-forestgreen-300"
      }  px-[37px] py-[16px] rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
