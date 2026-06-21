export interface HomeProductTile {
  title: string;
  label: string;
  href: string;
  image: string;
}

export const homeProductTiles: HomeProductTile[] = [
  {
    title: "PCD & CBN Tools",
    label: "Super Abrasive Tooling",
    href: "/products/pcd-cbn-tools",
    image: "/assert/image/image1.png",
  },
  {
    title: "Natural Diamond Tools",
    label: "Precision Dressing",
    href: "/products/natural-diamond-tools",
    image: "/assert/image/image2.png",
  },
  {
    title: "Carbide & Ceramic",
    label: "Precision Tools",
    href: "/products/carbide-ceramic-tools",
    image: "/assert/image/image3.png",
  },
  {
    title: "Honing & Grinding",
    label: "Surface Solutions",
    href: "/products/honing-grinding-solutions",
    image: "/assert/image/image4.png",
  },
  {
    title: "Tool Holding Solutions",
    label: "Precision Holding Systems",
    href: "/products/tool-holding-solutions",
    image: "/assert/image/image1.png",
  },
];

/** Number of product tiles shown per carousel slide (2×2 grid). */
export const HOME_PRODUCT_TILES_PER_SLIDE = 4;
