// Blog posts. These are sample articles written for launch –
// the client should review them or replace them with their own posts.
// postContent blocks: { blockType: "paragraph" | "heading" | "list", blockText | listItems }

export const blogPosts = [
  {
    postSlug: "make-a-small-apartment-feel-bigger",
    postTitle: "How to Make a Small Apartment Feel Bigger",
    postCategory: "Interior Design",
    postDate: "2026-11-02",
    postReadMinutes: 4,
    postImage: "/images/home/hero-sky-garden-lofts.jpg",
    postExcerpt:
      "Light colours, smart furniture and a clear layout can make even a compact apartment feel open and calm.",
    postContent: [
      {
        blockType: "paragraph",
        blockText:
          "Many apartments in Dhaka are compact, but a small floor area does not have to feel tight. With a few design decisions, a room can look and feel noticeably larger.",
      },
      { blockType: "heading", blockText: "Keep the colour palette light" },
      {
        blockType: "paragraph",
        blockText:
          "Soft whites, warm beiges and light greys reflect daylight and blur the edges of a room. Use darker tones only as small accents so the space stays airy.",
      },
      { blockType: "heading", blockText: "Choose furniture that works twice" },
      {
        blockType: "list",
        listItems: [
          "Beds and benches with storage underneath",
          "Extendable dining tables for guests",
          "Wall-mounted shelves instead of tall cabinets",
          "Raised-leg sofas that show more floor",
        ],
      },
      { blockType: "heading", blockText: "Let the light travel" },
      {
        blockType: "paragraph",
        blockText:
          "Sheer curtains, a large mirror opposite the window and glossy floor finishes spread natural light further into the room. A clear walking path from the door to the window also makes the space feel bigger.",
      },
    ],
  },
  {
    postSlug: "materials-for-a-luxury-living-room",
    postTitle: "Choosing the Right Materials for a Luxury Living Room",
    postCategory: "Interior Design",
    postDate: "2026-10-26",
    postReadMinutes: 5,
    postImage: "/images/home/hero-onyx-residence.jpg",
    postExcerpt:
      "Luxury is not about expensive pieces everywhere – it is about a few honest materials used with care.",
    postContent: [
      {
        blockType: "paragraph",
        blockText:
          "A luxury living room comes from material quality and restraint. Picking two or three main materials and repeating them gives the room a calm, finished look.",
      },
      { blockType: "heading", blockText: "Start with the floor" },
      {
        blockType: "paragraph",
        blockText:
          "Marble, large-format porcelain tiles and engineered wood all suit a premium interior. Large tiles with thin joints make a room look more spacious and are easier to clean.",
      },
      { blockType: "heading", blockText: "Add texture with fabric and wood" },
      {
        blockType: "list",
        listItems: [
          "Bouclé or linen upholstery for softness",
          "Fluted wood panels for depth on feature walls",
          "Natural stone or solid wood for tables",
          "Brushed brass or black metal for small details",
        ],
      },
      {
        blockType: "paragraph",
        blockText:
          "Before ordering, always look at material samples together in the room's real light. Colours change a lot between showroom lighting and a home.",
      },
    ],
  },
  {
    postSlug: "what-to-expect-during-a-home-renovation",
    postTitle: "What to Expect During a Home Renovation",
    postCategory: "Construction",
    postDate: "2026-10-18",
    postReadMinutes: 6,
    postImage: "/images/home/before-after-before.jpg",
    postExcerpt:
      "From the first site visit to handover – the main stages of a renovation and how to plan for each one.",
    postContent: [
      {
        blockType: "paragraph",
        blockText:
          "A renovation goes smoothly when everyone knows the order of work in advance. Here are the stages most projects follow.",
      },
      { blockType: "heading", blockText: "1. Survey and planning" },
      {
        blockType: "paragraph",
        blockText:
          "The team measures the space, checks walls, wiring and plumbing, and prepares drawings and a budget. This is the best moment to decide on every change, because changes later cost more.",
      },
      { blockType: "heading", blockText: "2. Demolition and rough work" },
      {
        blockType: "paragraph",
        blockText:
          "Old finishes are removed, then new electrical lines, plumbing and any structural changes are put in place. This stage is noisy and dusty, so plan where you will stay if you live on site.",
      },
      { blockType: "heading", blockText: "3. Finishing and handover" },
      {
        blockType: "list",
        listItems: [
          "Plastering, flooring and ceiling work",
          "Painting and wall finishes",
          "Fixtures, lighting and furniture installation",
          "Final cleaning, inspection and handover",
        ],
      },
    ],
  },
  {
    postSlug: "bold-accent-walls",
    postTitle: "Bold Accent Walls: When Colour Makes the Room",
    postCategory: "Design Trends",
    postDate: "2026-10-09",
    postReadMinutes: 3,
    postImage: "/images/home/hero-executive-hub.jpg",
    postExcerpt:
      "One deep-coloured wall can give a room personality without overwhelming it. Here is how to choose it well.",
    postContent: [
      {
        blockType: "paragraph",
        blockText:
          "An accent wall is one of the simplest ways to change the mood of a room. Deep teal, terracotta and forest green are especially popular right now.",
      },
      { blockType: "heading", blockText: "Pick the right wall" },
      {
        blockType: "paragraph",
        blockText:
          "Choose the wall your eye lands on first when you enter – usually behind the sofa, the bed or a built-in shelf. Avoid walls broken up by many doors or windows.",
      },
      { blockType: "heading", blockText: "Balance the colour" },
      {
        blockType: "list",
        listItems: [
          "Keep the other walls light and neutral",
          "Repeat the accent colour once in a cushion or chair",
          "Use warm lighting so deep colours do not feel cold",
        ],
      },
    ],
  },
  {
    postSlug: "lighting-a-room-in-layers",
    postTitle: "Lighting a Room in Layers",
    postCategory: "Interior Design",
    postDate: "2026-09-28",
    postReadMinutes: 4,
    postImage: "/images/home/hero-boutique-concept.jpg",
    postExcerpt:
      "Good lighting uses three layers together: general light, task light and accent light.",
    postContent: [
      {
        blockType: "paragraph",
        blockText:
          "A single ceiling light makes a room look flat. Combining different kinds of light gives depth and lets you change the mood for different times of day.",
      },
      { blockType: "heading", blockText: "The three layers" },
      {
        blockType: "list",
        listItems: [
          "Ambient: cove lighting or ceiling lights for overall brightness",
          "Task: reading lamps, under-cabinet lights in the kitchen",
          "Accent: spotlights on art, shelves or textured walls",
        ],
      },
      {
        blockType: "paragraph",
        blockText:
          "Warm white bulbs (around 2700–3000K) feel comfortable in living rooms and bedrooms, while slightly cooler light works well in kitchens and work areas. Dimmers make every layer more useful.",
      },
    ],
  },
  {
    postSlug: "questions-before-buying-an-apartment",
    postTitle: "Questions to Ask Before Buying an Apartment",
    postCategory: "Property",
    postDate: "2026-09-15",
    postReadMinutes: 5,
    postImage: "/images/home/cta-house-night.jpg",
    postExcerpt:
      "A short checklist to help you compare apartments and avoid surprises after you move in.",
    postContent: [
      {
        blockType: "paragraph",
        blockText:
          "Buying an apartment is one of the biggest decisions a family makes. Asking the right questions early saves time and money later.",
      },
      { blockType: "heading", blockText: "About the building" },
      {
        blockType: "list",
        listItems: [
          "Are all approvals and ownership documents complete?",
          "When will the building be finished and handed over?",
          "Is there a generator, lift and enough parking?",
        ],
      },
      { blockType: "heading", blockText: "About the apartment" },
      {
        blockType: "list",
        listItems: [
          "Which way do the main windows face, and how much daylight comes in?",
          "What finishes are included in the price?",
          "What are the monthly service charges?",
        ],
      },
      {
        blockType: "paragraph",
        blockText:
          "Visiting at different times of day and talking to current residents gives a clearer picture than any brochure. This is general guidance, not legal advice – check documents with a qualified lawyer before you buy.",
      },
    ],
  },
];

export function getBlogPostBySlug(postSlug) {
  return blogPosts.find((blogPost) => blogPost.postSlug === postSlug);
}

// "2026-11-02" -> "2 November 2026"
export function formatPostDate(postDate) {
  return new Date(`${postDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
