import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog";
import { PageIntro, BookingCTA, JsonLd } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
import { generateArticleSchema } from "@/lib/schema";
import { EDITORIAL_GUIDES } from "@/data/editorial-guides";
export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getBlogPostBySlug(slug);
  return p
    ? constructMetadata({
        title: p.slug === "massage-types-explained" ? "Thai, Swedish & Deep Tissue Compared" : p.title,
        description: p.excerpt,
        path: "/blog/" + p.slug,
        type: "article",
      })
    : { title: "Guide not found", robots: { index: false } };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getBlogPostBySlug(slug);
  if (!p) notFound();
  const sections = [...p.content, ...(EDITORIAL_GUIDES[p.slug] || [])];
  const readingMinutes = Math.ceil(sections.reduce((count, section) => count + section.paragraphs.join(" ").split(/\s+/).length, 0) / 200);
  return (
    <>
      <PageIntro
        eyebrow={p.category}
        title={p.title}
        description={p.excerpt}
        path={"/blog/" + p.slug}
      />
      <article className="wrap prose">
        <span className="eyebrow">
          {p.author} · approximately {readingMinutes} min read
        </span>
        {sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </section>
        ))}
        <h2>Safety and source notes</h2>
        <p>These articles compare relaxation experiences and help plan a visit. They do not diagnose a condition or prescribe a treatment schedule. Read our <Link href="/safety">preparation and safety guide</Link> and the <a href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know">NCCIH overview of massage safety</a> for health-related context. Business-specific policies and session availability should be confirmed directly.</p>
        <h2>Put your plans together</h2>
        <p>
          Compare <Link href="/services/thai-massage">Thai massage</Link>,{" "}
          <Link href="/services/swedish-massage">Swedish massage</Link> and{" "}
          <Link href="/services/deep-tissue-massage">deep tissue</Link>. Check
          the <Link href="/prices">current guide menu</Link> and our{" "}
          <Link href="/spa-in-gulshan-2">Gulshan 2 visitor information</Link>,
          then contact the team to confirm your appointment.
        </p>
        <Link href="/blog">← Back to the journal</Link>
      </article>
      <JsonLd data={generateArticleSchema(p)} />
      <BookingCTA />
    </>
  );
}
