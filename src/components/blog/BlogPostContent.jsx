// Renders the content blocks of a blog post
export default function BlogPostContent({ postContent }) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-ink/85">
      {postContent.map((contentBlock, blockIndex) => {
        if (contentBlock.blockType === "heading") {
          return (
            <h2
              key={blockIndex}
              className="pt-4 font-heading text-2xl text-ink md:text-3xl"
            >
              {contentBlock.blockText}
            </h2>
          );
        }

        if (contentBlock.blockType === "list") {
          return (
            <ul key={blockIndex} className="space-y-3">
              {contentBlock.listItems.map((listItem) => (
                <li key={listItem} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
          );
        }

        return <p key={blockIndex}>{contentBlock.blockText}</p>;
      })}
    </div>
  );
}
