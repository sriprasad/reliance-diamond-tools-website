import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ProductCategory } from "@/data/products";

interface PortfolioCategoryCardProps {
  category: ProductCategory;
  heroImage: string;
}

export default function PortfolioCategoryCard({ category, heroImage }: PortfolioCategoryCardProps) {
  const summary = category.children[0]?.items[0]?.description ?? "";

  return (
    <article className="portfolio-category-card group surface-card card-interactive flex h-full flex-col">
      <div className="portfolio-category-card__image">
        <Image
          src={heroImage}
          alt={category.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="portfolio-category-card__body flex flex-1 flex-col">
        <h3 className="portfolio-category-card__title">
          <Link href={`/products/${category.slug}`}>{category.name}</Link>
        </h3>

        {summary ? <p className="portfolio-category-card__summary">{summary}</p> : null}

        <ul className="portfolio-category-card__list">
          {category.children.map((child) => (
            <li key={child.slug}>
              <Link
                href={`/products/${category.slug}#${child.slug}`}
                className="portfolio-category-card__link"
              >
                <span>{child.name}</span>
                <ChevronRight
                  className="portfolio-category-card__link-icon"
                  strokeWidth={2.25}
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="portfolio-category-card__cta">
          <Link href={`/products/${category.slug}`} className="btn-secondary portfolio-category-card__cta-btn">
            View All {category.name}
          </Link>
        </div>
      </div>
    </article>
  );
}
