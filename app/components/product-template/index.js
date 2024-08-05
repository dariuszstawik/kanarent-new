import Image from "next/image";
import SectionTitle from "../section-title";

export default function ProductTemplate({ title, body, img, price }) {
  return (
    <div className="w-[80%] mx-auto grid grid-cols[1fr_3fr] gap-8">
      <div className="col-span-1">
        <Image
          src={img?.fields?.file?.url ? "https:" + img.fields.file.url : ""}
          width={img?.fields?.file?.details?.image?.width}
          height={img?.fields?.file?.details?.image?.height}
          //   className="w-full object-cover rounded-lg my-10"
          alt={img?.fields?.description ? img.fields.description : ""}
        />
      </div>
      <div className="col-start-2 col-span-1">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        <article className="mt-10">{body}</article>
      </div>
    </div>
  );
}
