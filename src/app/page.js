const brandColorSwatches = [
  { colorName: "gold", swatchClass: "bg-gold" },
  { colorName: "gold-hover", swatchClass: "bg-gold-hover" },
  { colorName: "section-dark", swatchClass: "bg-section-dark" },
  { colorName: "section-light", swatchClass: "bg-section-light" },
  { colorName: "ink", swatchClass: "bg-ink" },
  { colorName: "muted", swatchClass: "bg-muted" },
];

export default function HomePage() {
  return (
    <main className="site-container py-16">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
        Established 2024
      </p>
      <h1 className="mt-4 font-heading text-6xl">Design. Build. Transform.</h1>
      <p className="mt-4 max-w-xl text-muted">
        Complete Interior Design, Construction & Property Solutions Crafted
        with Precision.
      </p>

      <button className="mt-8 rounded-lg bg-gold px-8 py-3 font-semibold text-white hover:bg-gold-hover">
        Contact Us
      </button>

      <div className="mt-12 grid grid-cols-3 gap-4">
        {brandColorSwatches.map((brandColor) => (
          <div key={brandColor.colorName}>
            <div className={`h-16 rounded-lg border ${brandColor.swatchClass}`} />
            <p className="mt-2 text-sm">{brandColor.colorName}</p>
          </div>
        ))}
      </div>
    </main>
  );
}