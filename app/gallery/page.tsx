import Image from "next/image";
import { PageIntro, BookingCTA } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({
  title: "Wellness Gallery & Treatment Inspiration",
  description:
    "Explore an illustrative wellness gallery of calm interiors, massage rituals and warming treatments for your Dhaka Spa Centre visit.",
  path: "/gallery",
});
const images = [
  ["hero", "A quieter setting"],
  ["aroma-oil", "Botanical moments"],
  ["hot-stone", "The comfort of warmth"],
  ["thai-massage", "Room to unwind"],
  ["couple-suite", "Time, shared"],
];
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="The gallery"
        title="Small details. A slower rhythm."
        description="An illustrative collection of spa settings and wellness rituals. These images convey the mood of the experience; they are not verified photographs of Dhaka Spa Centre or its staff."
        path="/gallery"
      />
      <section className="wrap page-body gallery-grid">
        {images.map(([s, t]) => (
          <figure key={s}>
            <div className="gallery-item">
              <Image
                src={"/images/dhaka-spa-" + s + ".webp"}
                alt={"Illustrative wellness image: " + t}
                fill
                sizes="(max-width:500px) 100vw, (max-width:760px) 50vw,70vw"
              />
            </div>
            <figcaption>{t} · Illustrative imagery</figcaption>
          </figure>
        ))}
      </section>
      <BookingCTA />
    </>
  );
}
