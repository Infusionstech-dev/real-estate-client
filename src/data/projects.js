// All projects in one place: used by the Home portfolio, the Projects pages
// and each project's details page (/projects/[projectSlug]).
// Titles describe what is in the photos for now. Photos will be replaced later.

const projectPhotos = {
  onyx: "/images/home/hero-onyx-residence.jpg",
  teal: "/images/home/hero-executive-hub.jpg",
  terracotta: "/images/home/hero-minimalist-culinary.jpg",
  wave: "/images/home/hero-boutique-concept.jpg",
  ivory: "/images/home/hero-sky-garden-lofts.jpg",
};

// Each project shows its own photo first, then the other four
function galleryStartingWith(firstPhotoKey) {
  return [
    projectPhotos[firstPhotoKey],
    ...Object.entries(projectPhotos)
      .filter(([photoKey]) => photoKey !== firstPhotoKey)
      .map(([, photoPath]) => photoPath),
  ];
}

// projectLayout: "large" (big card), "small", "wide" (two columns) – for the grid
export const projects = [
  {
    projectSlug: "the-onyx-residence",
    projectTitle: "The Onyx Residence",
    projectCategory: "Residential",
    projectSubtitle: "Contemporary Dark Living Room",
    projectImage: projectPhotos.onyx,
    projectLayout: "large",
    projectGallery: galleryStartingWith("onyx"),
  },
  {
    projectSlug: "teal-arch-lounge",
    projectTitle: "Teal Arch Lounge",
    projectCategory: "Residential",
    projectSubtitle: "Accent Wall & Reading Nook",
    projectImage: projectPhotos.teal,
    projectLayout: "small",
    projectGallery: galleryStartingWith("teal"),
  },
  {
    projectSlug: "terracotta-reading-room",
    projectTitle: "Terracotta Reading Room",
    projectCategory: "Residential",
    projectSubtitle: "Eclectic Lounge Interior",
    projectImage: projectPhotos.terracotta,
    projectLayout: "small",
    projectGallery: galleryStartingWith("terracotta"),
  },
  {
    projectSlug: "wave-ceiling-residence",
    projectTitle: "Wave Ceiling Residence",
    projectCategory: "Residential",
    projectSubtitle: "Sculpted Ceiling Living Room",
    projectImage: projectPhotos.wave,
    projectLayout: "small",
    projectGallery: galleryStartingWith("wave"),
  },
  {
    projectSlug: "ivory-dining-loft",
    projectTitle: "Ivory Dining Loft",
    projectCategory: "Residential",
    projectSubtitle: "Open-Plan Dining & Living",
    projectImage: projectPhotos.ivory,
    projectLayout: "wide",
    projectGallery: galleryStartingWith("ivory"),
  },
];

export function getProjectBySlug(projectSlug) {
  return projects.find((project) => project.projectSlug === projectSlug);
}
