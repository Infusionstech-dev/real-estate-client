import Image from "next/image";
import Link from "next/link";

// Logo height in each place it is used
const logoSizeClasses = {
  navbar: "h-14",
  footer: "h-24",
};

export default function SiteLogo({ size = "navbar", className = "" }) {
  return (
    <Link href="/" className={`inline-block shrink-0 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Space Interiors & Builders"
        width={512}
        height={402}
        priority={size === "navbar"}
        className={`${logoSizeClasses[size]} w-auto`}
      />
    </Link>
  );
}
