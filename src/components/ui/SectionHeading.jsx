const headingAlignClasses = {
  left: "text-left",
  center: "text-center mx-auto",
};

const titleThemeClasses = {
  light: "text-ink",
  dark: "text-white",
};

export default function SectionHeading({
  eyebrowText,
  titleText,
  align = "left",
  theme = "light",
  className = "",
}) {
  return (
    <div className={`${headingAlignClasses[align]} ${className}`}>
      {eyebrowText && (
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold md:text-sm">
          {eyebrowText}
        </p>
      )}
      <h2
        className={`mt-3 font-heading text-4xl leading-tight md:text-5xl ${titleThemeClasses[theme]}`}
      >
        {titleText}
      </h2>
    </div>
  );
}
