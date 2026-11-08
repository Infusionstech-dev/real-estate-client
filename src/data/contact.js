// Contact details shown on the Contact page (from the Figma design)

export const officeAddress = "House #579, Road #09, Mirpur DOHS, Dhaka-1216";
export const officeEmail = "info@spaceinbuild.com";

// Google Maps embed for the office address (no API key needed)
export const officeMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  "House 579, Road 9, Mirpur DOHS, Dhaka 1216, Bangladesh"
)}&output=embed`;

export const contactDetails = [
  {
    detailIcon: "location",
    detailTitle: "Office Location",
    detailValue: officeAddress,
  },
  {
    detailIcon: "mail",
    detailTitle: "Email",
    detailValue: officeEmail,
    detailHref: `mailto:${officeEmail}`,
  },
  {
    detailIcon: "phone",
    detailTitle: "Contact Number",
    detailValue: "+880 1313 552299",
    detailHref: "tel:+8801313552299",
  },
  {
    detailIcon: "clock",
    detailTitle: "Office Time",
    detailValue: "Sunday - Friday : 09:30 am - 06:30 pm",
  },
];
