import PageHeader from "../components/page-header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/navbar";

export const runtime = "edge";

async function getContentfulContent() {
  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_KEY;

    const res = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=termsOfUse`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data from Contentful");
    }

    const data = await res.json();

    return data.items[0];
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return null;
  }
}

export default async function RegulaminSerwisu() {
  const termsOfUse = await getContentfulContent();
  return (
    <>
      <Navbar />
      <PageHeader title="Dokumenty" />
      <section className="max-w-4xl mx-auto px-8 mb-16">
        <h2>{termsOfUse.fields.title}</h2>
        <article className="">
          {documentToReactComponents(termsOfUse.fields.body)}
        </article>
      </section>
    </>
  );
}
