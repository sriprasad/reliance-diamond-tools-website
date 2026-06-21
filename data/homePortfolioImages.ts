/**
 * Category hero images for homepage sections (Portfolio + About).
 * Order matches `productCategories` in data/products.ts.
 */
export const homePortfolioCategoryImages = [
  "/assert/image/PCD&CBNTools 800x600.png",
  "/assert/image/NaturalDiamondTools 800x600.png",
  "/assert/image/Carbide&Ceramic 800x600.png",
  "/assert/image/Honing&Grinding 800x600.png",
  "/assert/image/Tool Holding Solutions 800x600.png",
] as const;

export function getHomePortfolioImage(categoryIndex: number): string {
  return homePortfolioCategoryImages[categoryIndex] ?? homePortfolioCategoryImages[0];
}

/** Homepage About section — two showcase images */
export const homeAboutSectionImages = [
  homePortfolioCategoryImages[0],
  homePortfolioCategoryImages[1],
] as const;
