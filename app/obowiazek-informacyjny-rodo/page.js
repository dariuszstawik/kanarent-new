import PageHeader from "../components/page-header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/navbar";

export const runtime = "edge";
export const dynamicParams = false;

async function getContentfulContent() {
  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_KEY;

    const resRodo = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=rodo`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!resRodo.ok) {
      throw new Error("Failed to fetch data from Contentful");
    }

    const rodoData = await resRodo.json();

    return rodoData.items[0];
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return null;
  }
}

export default async function ObowiazekInformacyjnyRodo() {
  const rodoContent = await getContentfulContent();

  return (
    <>
      <Navbar />
      <PageHeader title="Dokumenty" />
      <section className="max-w-4xl mx-auto px-8 mb-16">
        <h2>{rodoContent.fields.title}</h2>
        <article className="">
          {documentToReactComponents(rodoContent.fields.body)}
        </article>
      </section>
    </>
  );
}
