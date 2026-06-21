import Image from "next/image";

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
}

export default function IndustryCard({ title, description, image }: IndustryCardProps) {
  return (
    <article className="industry-info-card card-interactive group flex h-full min-h-[7.5rem] overflow-hidden">
      <div className="industry-info-card-image relative w-[30%] shrink-0 bg-ice-blue border-r border-gainsboro/50 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 30vw, 160px"
          loading="lazy"
        />
      </div>
      <div className="flex w-[70%] min-w-0 flex-col justify-center px-4 py-4 md:px-5 md:py-5">
        <h3 className="industry-info-card-title font-heading text-sm md:text-base font-semibold text-black mb-1.5 leading-snug">
          {title}
        </h3>
        <p className="text-body-sm text-grey-2 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
