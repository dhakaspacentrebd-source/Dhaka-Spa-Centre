import { PageIntro } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({
  title: "Privacy policy",
  description: "How information is handled when you use this website.",
  path: "/privacy-policy",
});
const blocks = [
  [
    "Browsing this website",
    "You can browse the treatment guides without creating an account. The website hosting provider may process ordinary request information, such as IP address and browser type, to deliver and protect the site.",
  ],
  [
    "Booking enquiries",
    "The enquiry form prepares a message in your browser and opens WhatsApp. This website does not submit that form to a booking database. Information you choose to send through WhatsApp, Telegram or a phone call is handled through that channel and used to respond to your enquiry. Avoid sending sensitive personal information in a booking request.",
  ],
  [
    "Analytics and external services",
    "This website uses Google Analytics 4 to understand page visits and booking, call and direction clicks. Google may process browser and device information, approximate location and cookie identifiers. Our event tracking excludes booking form text, WhatsApp message contents and URL query strings. Google signals and advertising personalization are disabled. WhatsApp, Telegram and Google Maps apply their own privacy policies.",
  ],
  [
    "Questions and requests",
    "For questions about information you have shared with Dhaka Spa Centre, call +8801609875990. Ask the team about access, correction or deletion of your enquiry information.",
  ],
];
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy policy"
        title="Privacy policy"
        description="How information is handled when you use this website."
        path="/privacy-policy"
      />
      <section className="wrap prose">
        {blocks.map(([h, p]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </section>
        ))}
        <p>
          <a className="text-link" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses information from this website</a>
          {" · "}
          <a className="text-link" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics browser opt-out</a>
        </p>
      </section>
    </>
  );
}
