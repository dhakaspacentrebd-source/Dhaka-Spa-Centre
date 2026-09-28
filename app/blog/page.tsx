import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { PageIntro } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({
  title: "The Wellness Journal | Massage & Visit Guides",
  description:
    "Practical guides to Thai massage, choosing a session and preparing for a spa visit in Dhaka and Gulshan 2.",
  path: "/blog",
});
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="The journal"
        title="A more thoughtful way to unwind."
        description="Notes on treatments, time and making the most of your next visit."
        path="/blog"
      />
      <section className="wrap page-body">
        {BLOG_POSTS.map((p) => (
          <article className="journal-card" key={p.slug}>
            <span className="eyebrow">{p.category}</span>
            <h2>
              <Link href={"/blog/" + p.slug}>{p.title}</Link>
            </h2>
            <p>{p.excerpt}</p>
            <Link href={"/blog/" + p.slug} className="text-link">
              Read the guide ↗
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
