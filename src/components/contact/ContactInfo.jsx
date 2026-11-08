import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { contactDetails, officeMapEmbedUrl } from "@/data/contact";

function ContactDetailIcon({ detailIcon }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (detailIcon) {
    case "location":
      return (
        <svg {...iconProps}>
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3.5 6.5l8.5 6 8.5-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...iconProps}>
          <path d="M5 3h3.5l1.7 4.3-2.2 1.5a11 11 0 0 0 7.2 7.2l1.5-2.2L21 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
  }
}

export default function ContactInfo() {
  return (
    <div>
      <RevealOnScroll direction="left">
        <h1 className="font-heading text-4xl text-gold md:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 text-sm text-ink/80">
          Reach out to us through any of the methods below.
        </p>
      </RevealOnScroll>

      <ul className="mt-10 space-y-6">
        {contactDetails.map((contactDetail, detailIndex) => (
          <li key={contactDetail.detailTitle}>
            <RevealOnScroll
              direction="left"
              delay={100 + detailIndex * 100}
              className="flex items-center gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <ContactDetailIcon detailIcon={contactDetail.detailIcon} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  {contactDetail.detailTitle}
                </span>
                {contactDetail.detailHref ? (
                  <a
                    href={contactDetail.detailHref}
                    className="mt-0.5 block text-sm text-ink/80 transition-colors hover:text-gold"
                  >
                    {contactDetail.detailValue}
                  </a>
                ) : (
                  <span className="mt-0.5 block text-sm text-ink/80">
                    {contactDetail.detailValue}
                  </span>
                )}
              </span>
            </RevealOnScroll>
          </li>
        ))}
      </ul>

      <RevealOnScroll delay={500} className="mt-10">
        <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
          <iframe
            src={officeMapEmbedUrl}
            title="Space Interior & Builders office on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block aspect-[16/9] w-full border-0"
          />
        </div>
      </RevealOnScroll>
    </div>
  );
}
