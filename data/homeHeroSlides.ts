export interface HomeHeroSlide {
  id: string;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
}

export const homeHeroSlides: HomeHeroSlide[] = [
  {
    id: "mono-block-pcd",
    title: "Precision Engineered. Production Optimized",
    content:
      "Custom-built Mono Block PCD Combination Tools combine multiple machining operations into a single tool, ensuring maximum efficiency, superior accuracy, and exceptional tool life for demanding manufacturing applications.",
    image: "/assert/image/HeroSlide1.png",
    imageAlt: "Mono Block PCD Combination Tool",
  },
  {
    id: "pcd-reamer",
    title: "Precision Reaming. Perfected",
    content:
      "Designed for high-precision finish machining, our 8-Flute PCD Reamer features precision guide pads, dedicated coolant channels for both the PCD cutting edges and guide pads, and compatibility with radial and axial adjustment holders. Engineered to deliver exceptional dimensional accuracy, superior surface finish, enhanced process stability, and extended tool life in high-volume production.",
    image: "/assert/image/HeroSlide2.png",
    imageAlt: "8-Flute PCD Reamer",
  },
  {
    id: "finish-boring-bar",
    title: "Precision Fine Boring. Perfected",
    content:
      "Our Multiple Bore Finish Boring Bar is engineered for precision finish machining, featuring ±0.005 mm fine diameter adjustment and an integrated internal coolant system. Designed for superior bore accuracy, excellent surface finish, and stable machining performance, it delivers consistent results and enhanced productivity in high-volume manufacturing.",
    image: "/assert/image/HeroSlide3.png",
    imageAlt: "Multiple Bore Finish Boring Bar",
  },
];

export const HOME_HERO_ROTATE_MS = 7000;
