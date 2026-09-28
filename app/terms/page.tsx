import { PageIntro } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({
  title: "Booking terms",
  description:
    "Please read these practical terms before arranging your appointment.",
  path: "/terms",
});
const blocks = [
  [
    "Making a reservation",
    "A link click or prepared WhatsApp message does not confirm a reservation. Your appointment is confirmed only after the team agrees on availability, treatment, duration and total price.",
  ],
  [
    "Prices and availability",
    "Published amounts are initial guide prices in Bangladeshi taka, pending confirmation by Dhaka Spa Centre. Ask about the current total, applicable charges, and any deposit before paying. Specialist treatments and session lengths are subject to availability.",
  ],
  [
    "Changing your plans",
    "Contact the team as early as possible if you need to change or cancel an appointment. Confirm the applicable cancellation, deposit and refund conditions before making payment; this website does not publish a fixed cancellation policy.",
  ],
  [
    "Treatment preferences",
    "Discuss your comfort, product sensitivities and treatment preferences with the team. Spa services are for relaxation and are not represented as medical diagnosis or treatment. You may ask to adjust or stop a session.",
  ],
  [
    "Website imagery",
    "Wellness imagery is illustrative and should not be treated as a verified record of the premises, staff or facilities. Contact us for current practical details before visiting.",
  ],
];
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Booking terms"
        title="Booking terms"
        description="Please read these practical terms before arranging your appointment."
        path="/terms"
      />
      <section className="wrap prose">
        {blocks.map(([h, p]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </section>
        ))}
      </section>
    </>
  );
}
