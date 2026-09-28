import Image from "next/image";
import Link from "next/link";
import { PageIntro, BookingCTA } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({
  title: "Our Story & Approach to Wellness",
  description:
    "Discover Dhaka Spa Centre, a Thai spa and massage centre in Gulshan 2. Thoughtful treatment choices and a simple, personal way to arrange your visit.",
  path: "/about",
});
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Our story"
        title="Wellness, with room to breathe."
        description="Dhaka Spa Centre is a spa, massage and wellness centre in Gulshan 2, Dhaka. Our starting point is simple: make time for yourself, in a way that suits you."
        path="/about"
      />
      <section className="wrap page-body">
        <div className="detail-grid">
          <div className="detail-image">
            <Image
              src="/images/dhaka-spa-hero.webp"
              alt="Illustrative warm wood spa interior"
              fill
              sizes="(max-width:760px) 100vw,50vw"
            />
          </div>
          <div className="detail-info">
            <span className="eyebrow">A MORE CONSIDERED PAUSE</span>
            <h2>Begin with how you feel.</h2>
            <p>
              Some guests look for movement and stretching. Others prefer
              flowing strokes, warmth or focused pressure. Our treatment
              collection helps you compare those experiences before you decide.
            </p>
            <h2>Clarity before your visit.</h2>
            <p>
              Explore the treatment guides and initial price menu, then speak
              with us about your preferences. Confirm the session, total price
              and time directly with the team before travelling.
            </p>
            <p>
              Our address is House # 1/A, Road 90, Gulshan 2, Dhaka 1212,
              Bangladesh. We welcome enquiries from across Dhaka, including
              Banani and Baridhara.
            </p>
            <Link className="text-link" href="/services">
              Explore the collection ↗
            </Link>
            <p className="photo-caption">
              Imagery is illustrative. Verified photographs of the centre can be
              added to the gallery.
            </p>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
