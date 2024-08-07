import { client } from "@/lib/contentful/client";
import PageHeader from "../components/page-header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/navbar";

async function getContentfulContent() {
  const resPrivacyPolicy = await client.getEntries({
    content_type: "privacyPolicy",
  });

  const privacyPolicy = resPrivacyPolicy.items;

  return privacyPolicy[0];
}

export default async function PolitykaPrywatnosci() {
  const privacyPolicy = await getContentfulContent();
  return (
    <>
      <Navbar />
      <PageHeader title="Dokumenty" />
      <section className="max-w-4xl mx-auto px-8 mb-16">
        <h2>{privacyPolicy.fields.title}</h2>
        <article className="">
          {documentToReactComponents(privacyPolicy.fields.body)}
        </article>
      </section>
    </>
  );
}
