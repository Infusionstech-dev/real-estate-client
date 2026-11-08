// Service detail pages (/services/[serviceSlug]) – text from the Figma design.
// Photos reuse the site's existing images for now.

export const serviceStats = [
  { statIcon: "projects", statValue: "600+", statLabel: "Projects" },
  { statIcon: "experience", statValue: "10+", statLabel: "Experiences" },
  { statIcon: "clients", statValue: "550+", statLabel: "Happy Clients" },
];

export const servicePages = [
  {
    serviceSlug: "interior-design",
    serviceTitle: "Interior Design",
    heroEyebrow: "Interior Design",
    heroTitleLines: ["Where Design Meets", "The Way You Live."],
    heroIntro:
      "Thoughtfully crafted interiors that bring together architecture, functionality, materials, and craftsmanship. We transform everyday spaces into distinctive environments designed to feel as beautiful as they perform.",
    heroImage: "/images/home/hero-boutique-concept.jpg",
    serviceSections: [
      {
        sectionTitle: "Residential Interior",
        sectionImage: "/images/home/hero-minimalist-culinary.jpg",
        sectionItems: [
          { itemLabel: "Apartment Interior Design", itemText: "Thoughtful apartment interior design in Bangladesh that turns small spaces into homes you never want to leave." },
          { itemLabel: "Kitchen Design & Bedroom Design", itemText: "Kitchen bedroom design that brings function and comfort together, crafted for how you actually live." },
          { itemLabel: "Living & Dining Spaces", itemText: "Living spaces and a dining table designed to bring every gathering, big or small, closer together." },
          { itemLabel: "False Ceiling & Lighting", itemText: "False ceiling lights that turn a plain roof into the quiet detail everyone notices first." },
          { itemLabel: "Wardrobe & Storage Solutions", itemText: "Wardrobe storage solutions that keep every corner organized, so your space stays as calm as it looks." },
          { itemLabel: "Modular Furniture", itemText: "Module furniture that adapts to your space, not the other way around." },
          { itemLabel: "Renovation & Remodeling", itemText: "Every renovation & remodeling project we take on starts with one question: how should this space feel." },
        ],
      },
      {
        sectionTitle: "Commercial Interior",
        sectionImage: "/images/home/why-space-team.jpg",
        sectionItems: [
          { itemLabel: "Corporate Office Interior", itemText: "A well-planned corporate office interior says a lot about a brand before a single word is spoken." },
          { itemLabel: "Reception & Lobby Design", itemText: "The reception & lobby is where first impressions live, so we design it to speak for the whole space." },
          { itemLabel: "Retail Shops & Showrooms", itemText: "The right retail shops & showrooms design doesn't just display products, it tells their story." },
          { itemLabel: "False Ceiling & Lighting", itemText: "False ceiling lights that turn a plain roof into the quiet detail everyone notices first." },
          { itemLabel: "Clinics & Hospitals", itemText: "Good design in clinics & hospitals isn't just about looks, it's about putting patients at ease." },
          { itemLabel: "Banks & Financial Offices", itemText: "A well-planned Banks & Financial Offices space isn't just functional, it's the first step in building client confidence." },
          { itemLabel: "Educational Institutions", itemText: "A well-planned educational institutions space shapes how students learn, think, and grow." },
        ],
      },
      {
        sectionTitle: "Our Interior Services Include",
        sectionImage: "/images/home/hero-sky-garden-lofts.jpg",
        sectionItems: [
          { itemLabel: "Space Planning & Layout", itemText: "Practical 2D layouts that make every square foot work for how you live or work." },
          { itemLabel: "3D Visualization", itemText: "Realistic 3D views so you can see the finished space before any work begins." },
          { itemLabel: "Material & Colour Selection", itemText: "Guidance on finishes, fabrics and colours that suit your style and budget." },
          { itemLabel: "Custom Furniture", itemText: "Furniture designed and built to fit your space exactly." },
          { itemLabel: "Execution & Handover", itemText: "Our team manages production, installation and quality checks through to handover." },
        ],
      },
    ],
  },
  {
    serviceSlug: "construction",
    serviceTitle: "Construction",
    heroEyebrow: "Construction",
    heroTitleLines: ["Thoughtful Design.", "Reliable Construction."],
    heroIntro:
      "From planning and design to engineering and construction, we create practical, well-coordinated spaces shaped around your needs, site, and long-term goals.",
    heroImage: "/images/home/cta-house-night.jpg",
    serviceSections: [
      {
        sectionTitle: "Architectural Services",
        sectionImage: "/images/home/why-space-team.jpg",
        sectionItems: [
          { itemLabel: "Building Planning", itemText: "Careful building and zoning planning shapes practical layouts, circulation, parking, open spaces, access, and functional relationships for each project." },
          { itemLabel: "Architectural Design", itemText: "Our architectural design service creates functional concepts for residential, commercial, corporate, and institutional buildings while balancing usability and site conditions." },
          { itemLabel: "3D Exterior Design", itemText: "3D exterior design helps visualize façades, proportions, materials, openings, and architectural character clearly before detailed development or construction begins." },
          { itemLabel: "Renovation Design", itemText: "A home improvement designer approach reorganizes existing spaces, improves functionality, refreshes layouts, and creates a more practical design direction." },
          { itemLabel: "Master Planning", itemText: "Master planning architecture organizes buildings, circulation, open areas, access, utilities, and future development within a coordinated site framework." },
        ],
      },
      {
        sectionTitle: "Engineering Consultancy",
        sectionImage: "/images/home/before-after-before.jpg",
        sectionItems: [
          { itemLabel: "Structural Design Coordination & Quality Control", itemText: "Structural design coordination & quality control supports alignment, accuracy, and consistency across project requirements." },
          { itemLabel: "Cost Estimation & BOQ", itemText: "Professional cost estimation supports budgeting, quantity planning, procurement, and clearer financial decisions throughout the project." },
          { itemLabel: "Project Planning & Project Management", itemText: "Our program and project management organizes schedules, resources, responsibilities, and coordination for controlled project delivery." },
          { itemLabel: "Tender Documentation", itemText: "Effective tender management prepares clear scopes, specifications, requirements, and supporting documents for accurate contractor understanding and submissions." },
          { itemLabel: "Construction Supervision", itemText: "Our residential construction management monitors site activities, workmanship, progress, coordination, and quality against approved project requirements." },
        ],
      },
      {
        sectionTitle: "Construction Services",
        sectionImage: "/images/home/before-after-after.jpg",
        sectionItems: [
          { itemLabel: "Residential Buildings", itemText: "Our architecture residential services deliver practical homes and apartments with coordinated construction based on approved project requirements." },
          { itemLabel: "Commercial Buildings", itemText: "Our buildings commercial services support offices, retail spaces, showrooms, and institutions with coordinated, functional construction." },
          { itemLabel: "Office Buildings", itemText: "Our commercial office construction supports efficient layouts, coordinated systems, practical workplaces, and approved architectural requirements." },
          { itemLabel: "Renovation & Extension Works", itemText: "Our renovation and extension works improve, reorganize, or expand properties according to structural and functional requirements." },
          { itemLabel: "Turnkey Construction", itemText: "Our commercial turnkey contractors coordinate planning, procurement, execution, supervision, and delivery for organized project completion." },
        ],
      },
    ],
  },
  {
    serviceSlug: "property-sales",
    serviceTitle: "Property Sales & Marketing",
    heroEyebrow: "Property Sales & Marketing",
    heroTitleLines: ["Connecting Property,", "People, and Possibility."],
    heroIntro:
      "We combine property sales, targeted marketing, lead generation, and investment support to connect the right opportunities with the right buyers and investors.",
    heroImage: "/images/home/hero-onyx-residence.jpg",
    serviceSections: [
      {
        sectionTitle: "Sales & Services",
        sectionImage: "/images/home/cta-house-night.jpg",
        sectionItems: [
          { itemLabel: "Apartment Sales", itemText: "Our new apartment for sale service connects interested buyers with suitable residential properties, presenting key project details clearly while supporting enquiries, property viewings, communication, and sales coordination throughout the decision-making process for a more informed overall purchase experience." },
          { itemLabel: "Land & Plot Sales", itemText: "Our land & plot sales service supports property owners and buyers with clear property presentation, enquiry handling, site information, buyer communication, and sales coordination to help suitable land and plot opportunities reach genuinely interested prospects efficiently." },
        ],
      },
      {
        sectionTitle: "Property Marketing",
        sectionImage: "/images/home/hero-executive-hub.jpg",
        sectionItems: [
          { itemLabel: "Commercial Property Marketing", itemText: "Our land & plot sales focused marketing approach also supports commercial properties through targeted promotion, clear property information, buyer and investor outreach, enquiry management, and coordinated communication designed to generate stronger interest in suitable business property opportunities." },
          { itemLabel: "Digital Marketing for Real Estate", itemText: "As a real estate digital marketing agency, we support property businesses with online campaigns, content, audience targeting, lead-focused promotion, and digital visibility designed to connect projects with relevant buyers, investors, and property seekers more effectively." },
        ],
      },
      {
        sectionTitle: "Promotions & Leads",
        sectionImage: "/images/home/hero-sky-garden-lofts.jpg",
        sectionItems: [
          { itemLabel: "Property Promotion", itemText: "Our property promotion service presents residential, commercial, land, and development opportunities through clear messaging, suitable marketing channels, and audience-focused communication that helps increase visibility, attract relevant enquiries, and support property owners throughout the sales and marketing process effectively." },
          { itemLabel: "Client Lead Generation", itemText: "Our client lead generation service focuses on attracting relevant property enquiries, identifying potential buyers or investors, organizing prospect information, and supporting follow-up communication so sales teams can spend more time engaging with genuine opportunities and qualified prospects." },
        ],
      },
      {
        sectionTitle: "Investment & Commissions",
        sectionImage: "/images/home/why-space-background.jpg",
        sectionItems: [
          { itemLabel: "Investment Consultancy", itemText: "As an investment consulting company, we help clients review property opportunities, project objectives, market positioning, and practical considerations before making decisions, providing structured guidance that supports clearer evaluation of residential, commercial, land, and development investment options with confidence." },
          { itemLabel: "Commission-Based Sales Service", itemText: "Our commission based sales agency model supports property owners and developers with buyer outreach, enquiry coordination, property presentation, follow-up communication, and sales assistance, creating a performance-linked approach focused on helping suitable properties reach interested buyers more efficiently." },
        ],
      },
    ],
  },
];

export function getServicePageBySlug(serviceSlug) {
  return servicePages.find((servicePage) => servicePage.serviceSlug === serviceSlug);
}
