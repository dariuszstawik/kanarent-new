import { client } from "@/lib/contentful/client";
import PageHeader from "../components/page-header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/navbar";

export const runtime = "edge";

async function getContentfulContent() {
  const resTermsOfUse = await client.getEntries({
    content_type: "termsOfUse",
  });

  const termsOfUse = resTermsOfUse.items;

  return termsOfUse[0];
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
