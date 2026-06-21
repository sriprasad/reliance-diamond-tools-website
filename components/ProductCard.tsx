import { ReactNode } from "react";

interface ProductCardProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export default function ProductCard({ title, children, className = "" }: ProductCardProps) {
  return (
    <div className={`surface-card p-5 md:p-6 ${className}`}>
      <h3 className="font-heading text-base font-semibold text-black mb-2 tracking-tight">
        {title}
      </h3>
      {children && <div className="text-body-sm">{children}</div>}
    </div>
  );
}
