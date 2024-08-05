export default function PageHeader({ title }) {
  return (
    <div
      className="w-full h-[335px] bg-forestgreen-300 mt-28 mb-16 px-28 text-white flex justify-center items-center"
      style={{
        backgroundImage: 'url("/pattern10.svg")',
        backgroundPosition: "center",
      }}
    >
      <h1 className="my-auto font-lato text-white"> {title} </h1>
    </div>
  );
}
