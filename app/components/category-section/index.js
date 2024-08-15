import CategoryCard from "../category-card";
import SectionTitle from "../section-title";

export default function CategorySection({ categories, products, images }) {
  return (
    <section
      className="w-[90%] mx-auto pt-28 pb-32 text-5xl text-white font-poppins mq850:gap-[19px]"
      id="sprzet"
    >
      <SectionTitle>Sprzęt wg kategorii</SectionTitle>
      <ul className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[10px] gap-y-[60px] justify-items-center ">
        {categories.map((category) => (
          <CategoryCard
            key={category.sys.id}
            title={category.fields.categoryName}
            img={images.find(
              (image) => image.sys.id === category.fields.image.sys.id
            )}
            href={`/maszyny/${category.fields.slug}`}
          />
        ))}
      </ul>
    </section>
  );
}

// min-h-[953px]
