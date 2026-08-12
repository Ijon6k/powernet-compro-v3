import React from "react";
import Link from "next/link";
import { CaseStudyMetadata } from "@/lib/case-studies";

interface CaseStudyCardProps {
  article: CaseStudyMetadata;
  featured?: boolean;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  article,
  featured = false,
}) => {
  if (featured) {
    return (
      <Link
        href={`/case-study/${article.slug}`}
        className="group block w-full py-8 sm:py-10 border-b border-[#D9D9D9] transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Optional Image */}
          {article.coverImage && (
            <div className="lg:col-span-6 overflow-hidden rounded-xl bg-[#F5F5F5] aspect-[16/9]">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          )}

          {/* Content Column */}
          <div className={article.coverImage ? "lg:col-span-6 flex flex-col gap-4" : "lg:col-span-12 flex flex-col gap-4"}>
            {/* Meta Line */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#737373] font-inter-tight">
              <span className="font-medium text-[#262626] uppercase tracking-wider text-[11px]">
                {article.category}
              </span>
              <span>•</span>
              <span>{article.client}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#262626] font-inter-tight tracking-tight leading-tight group-hover:text-[#C02026] transition-colors">
              {article.title}
            </h2>

            {/* Summary */}
            <p className="text-base sm:text-lg text-[#595959] font-inter-tight font-normal leading-relaxed">
              {article.summary}
            </p>

            {/* Read Arrow Link */}
            <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-[#C02026] group-hover:translate-x-1 transition-transform">
              <span>Baca Artikel</span>
              <i className="fi fi-rr-arrow-right text-sm inline-flex items-center" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/case-study/${article.slug}`}
      className="group flex flex-col justify-between py-6 border-b border-[#D9D9D9]/80 transition-all duration-300"
    >
      <div className="flex flex-col gap-3">
        {/* Meta Line */}
        <div className="flex items-center gap-2 text-xs text-[#737373] font-inter-tight">
          <span className="font-medium text-[#262626] uppercase tracking-wider text-[10px]">
            {article.category}
          </span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#262626] font-inter-tight tracking-tight leading-snug group-hover:text-[#C02026] transition-colors">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-sm sm:text-base text-[#595959] font-inter-tight font-normal leading-relaxed line-clamp-2">
          {article.summary}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between text-xs text-[#737373] font-inter-tight">
        <span>{article.client}</span>
        <span className="text-[#C02026] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Baca <i className="fi fi-rr-arrow-small-right text-base inline-flex items-center" />
        </span>
      </div>
    </Link>
  );
};
