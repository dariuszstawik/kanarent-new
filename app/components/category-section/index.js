import CategoryCard from "../category-card";
import SectionTitle from "../section-title";

export default function CategorySection({ categories, products }) {
  return (
    <section
      className="w-[90%] mx-auto pt-28 pb-32 text-5xl text-white font-poppins mq850:gap-[19px]"
      id="sprzet"
    >
      <SectionTitle>Czego szukasz</SectionTitle>
      <ul className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[47px_37.7px] justify-items-center ">
        {categories.map((category) => (
          <CategoryCard
            key={category.sys.id}
            title={category.fields.categoryName}
            img={category.fields.image || ""}
            href={`/maszyny/${category.fields.slug}`}
          />
        ))}
      </ul>
    </section>
  );
}

// min-h-[953px]
