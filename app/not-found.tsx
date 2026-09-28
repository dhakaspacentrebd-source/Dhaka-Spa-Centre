import Link from "next/link";
export default function NotFound() {
  return (
    <section className="error-page">
      <span className="eyebrow">404 · A SMALL DETOUR</span>
      <h1>Let’s find your way back.</h1>
      <p>
        This page could not be found. Explore our treatments or return home.
      </p>
      <Link className="button" href="/">
        Return home ↗
      </Link>
    </section>
  );
}
