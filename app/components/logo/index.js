import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }) {
  return (
    <Link href="/">
      <Image
        src="/logo-horizontal.svg"
        alt="logo"
        width={295}
        height={81}
        className={className}
      />
    </Link>
  );
}
