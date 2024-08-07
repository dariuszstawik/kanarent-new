import { client } from "@/lib/contentful/client";
import PageHeader from "../components/page-header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/navbar";

async function getContentfulContent() {
  const resRodo = await client.getEntries({
    content_type: "rodo",
  });

  //   const rodo = resRodo.items;

  return resRodo.items[0];
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
