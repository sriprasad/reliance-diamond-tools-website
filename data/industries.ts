export interface Industry {
  title: string;
  description: string;
  image: string;
}

export const industries: Industry[] = [
  {
    title: "Automobile",
    description:
      "Precision tooling for engine components, transmission, and automotive manufacturing.",
    image: "/assert/image/industries/automobile.png",
  },
  {
    title: "Aerospace",
    description:
      "High-performance cutting solutions for aerospace-grade materials and components.",
    image: "/assert/image/industries/aerospace.jpg",
  },
  {
    title: "Optical Industry",
    description:
      "Diamond and super abrasive tools for optical lens and precision optics manufacturing.",
    // TODO: Replace with optics-specific photography (lenses, precision optics manufacturing).
    // Current asset appears microscopy/biology-adjacent — use /assert/image/industries/optical.jpg when updated.
    image: "/assert/image/industries/optical.jpg",
  },
  {
    title: "Medical Industry",
    description:
      "Reliable tooling for medical device manufacturing and surgical instrument production.",
    image: "/assert/image/industries/medical-industry.png",
  },
  {
    title: "Die & Mould",
    description: "PCD, CBN and carbide solutions for die and mould making applications.",
    image: "/assert/image/industries/die-mould.png",
  },
  {
    title: "General Engineering",
    description:
      "Versatile cutting tools for a wide range of general engineering and machining applications.",
    image: "/assert/image/industries/general-engineering.jpg",
  },
];
