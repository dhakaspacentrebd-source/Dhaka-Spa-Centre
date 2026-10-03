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
        {images.map(([s, t], i) => (
          <figure key={s}>
            <div className="gallery-item">
              <Image
                src={"/images/dhaka-spa-" + s + ".webp"}
                alt={"Illustrative wellness image: " + t}
                fill
                sizes={i % 3 === 2
                  ? "(max-width:760px) calc(100vw - 44px), (max-width:1392px) calc(100vw - 112px), 1280px"
                  : "(max-width:500px) calc(100vw - 44px), (max-width:760px) calc((100vw - 74px) / 2), (max-width:1392px) calc((100vw - 142px) / 2), 625px"}
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
