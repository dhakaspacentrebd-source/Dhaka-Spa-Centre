import Image from "next/image";
import Link from "next/link";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Dhaka Spa Centre home">
      <Image
        src="/brand/logo.svg"
        alt="Dhaka Spa Centre"
        width={203}
        height={49}
        priority
      />
    </Link>
  );
}
