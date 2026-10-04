import Link from "next/link";
import { PageIntro, BookingCTA } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({title:"Massage Preparation, Safety & Consent",description:"Plan a comfortable spa visit: discuss pressure, product sensitivities, consent and hygiene questions before booking Dhaka Spa Centre in Gulshan 2.",path:"/safety"});
export default function Page(){return <>
  <PageIntro eyebrow="Before your appointment" title="Preparation, safety and consent" description="Practical questions to discuss before a session. This guide does not claim a verified staff qualification or an owner-approved hygiene policy." path="/safety" />
  <article className="wrap prose">
    <h2>Decide whether a session is appropriate</h2>
    <p>Massage is generally considered low risk, but vigorous techniques can occasionally cause serious harm. If you have a health condition, recent injury or surgery, or are uncertain whether massage is appropriate, speak with a qualified healthcare professional before booking. Do not use a spa appointment to delay medical care.</p>
    <p>This safety guidance draws on the <a href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know">US National Center for Complementary and Integrative Health’s massage overview ↗</a>. Website descriptions are not an individual medical assessment.</p>
    <h2>Agree on boundaries before starting</h2>
    <p>Tell the team what treatment you expect, which areas you want avoided and what pressure feels comfortable. Ask how clothing, draping and privacy are handled for your chosen service. You can request a pause or stop; discomfort is a reason to speak up, not a target to endure.</p>
    <p>Dhaka Spa Centre’s detailed written consent and draping policies have not yet been supplied for this website. <Link href="/contact">Ask the team to explain them</Link> before reserving, especially for treatments whose names do not describe a standard technique.</p>
    <h2>Ask about hygiene and products</h2>
    <p>Ask how linens, reusable equipment and contact surfaces are cleaned between appointments. For oil, gel, scrub or heated treatments, request the product ingredients and temperature arrangements. Mention allergies or sensitivities, and ask whether an alternative is available. Do not assume “natural” means suitable for everyone.</p>
    <p>Cleaning procedures, product brands, laundry arrangements and staff training remain owner confirmation items. This page is a preparation guide, not a published hygiene certification.</p>
    <h2>Prepare for the specific technique</h2>
    <p>For Thai-style stretching, ask what to wear and keep movement within a comfortable range. For oil-based sessions, check ingredients and how oil is removed afterwards. For hot stones or warmed oil, discuss heat sensitivity. For multiple-practitioner sessions, agree on a clear way to request a pause.</p>
    <h2>After the session</h2>
    <p>Allow time to get dressed and stand up comfortably. Ask about removing products from your skin and follow any relevant advice from your healthcare professional. There is no fixed repeat schedule suitable for everyone. If you develop concerning or persistent symptoms, seek medical advice rather than treating them as proof that massage worked.</p>
    <h2>Keep booking and policy details clear</h2>
    <p>Confirm the appointment time, hands-on duration, total price, payment method and cancellation terms in advance. Avoid sending sensitive health details through a casual booking message; ask how to discuss them privately. Read the <Link href="/privacy-policy">website privacy policy</Link>, <Link href="/terms">terms</Link> and <Link href="/faq">visit FAQs</Link>.</p>
  </article><BookingCTA />
</>;}
