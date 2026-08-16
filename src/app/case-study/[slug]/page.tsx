import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MarkdownRenderer } from "@/components/case-study/MarkdownRenderer";
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
  getAllCaseStudies,
} from "@/lib/case-studies";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getCaseStudyBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://powernet.co.id/case-study/${article.slug}`,
      siteName: "POWERNET",
      locale: "id_ID",
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getCaseStudyBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllCaseStudies();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Article Reader Section - 1440px Outer Container, 960px Inner Reading Area */}
      <article className="pt-[110px] sm:pt-[140px] lg:pt-[170px] pb-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
          <div className="max-w-[880px] lg:max-w-[960px] 2xl:max-w-[1040px] mx-auto flex flex-col gap-6 sm:gap-10">
            {/* Back link */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm font-inter-tight text-[#737373]">
              <Link
                href="/case-study"
                className="hover:text-[#C02026] transition-colors inline-flex items-center gap-1.5 py-1"
              >
                <i className="fi fi-rr-arrow-small-left text-base sm:text-lg inline-flex items-center" />
                <span>Kembali ke Case Studies</span>
              </Link>
            </nav>

            {/* Quiet Header Meta */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#737373] font-inter-tight uppercase tracking-wider">
                <span className="font-semibold text-[#262626]">{article.category}</span>
                <span>•</span>
                <span>
                  {new Date(article.publishDate).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl lg:text-[48px] 2xl:text-[54px] font-semibold text-[#262626] font-inter-tight tracking-tight leading-snug sm:leading-[1.18]">
                {article.title}
              </h1>

              {/* Summary */}
              <p className="text-base sm:text-xl lg:text-2xl text-[#595959] font-inter-tight font-normal leading-relaxed">
                {article.summary}
              </p>

              {/* Client & Author info */}
              <div className="pt-4 sm:pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-[#737373] font-inter-tight">
                <span>Klien: <strong className="text-[#262626] font-medium">{article.client}</strong></span>
                <span>Oleh: <strong className="text-[#262626] font-medium">{article.author}</strong></span>
              </div>
            </div>

            {/* Optional Cover Image */}
            {article.coverImage && (
              <div className="overflow-hidden rounded-xl bg-[#F5F5F5] border border-[#E5E5E5]">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-auto max-h-[300px] sm:max-h-[480px] 2xl:max-h-[540px] object-cover"
                />
              </div>
            )}

            {/* Main Article Body */}
            <div className="pt-2 sm:pt-4">
              <MarkdownRenderer content={article.content} />
            </div>
          </div>
        </div>
      </article>

      {/* 3. Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 sm:py-16 bg-white  border-t border-[#D9D9D9]/70">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-6 sm:gap-8">
            <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-4">
              <h2 className="text-base sm:text-xl font-semibold text-[#262626] font-inter-tight uppercase tracking-tight">
                Studi Kasus Lainnya
              </h2>
              <Link
                href="/case-study"
                className="text-xs sm:text-sm font-semibold text-[#C02026] hover:underline font-inter-tight flex items-center gap-1"
              >
                <span>Lihat Semua</span>
                <i className="fi fi-rr-arrow-small-right text-base inline-flex items-center" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {relatedArticles.map((rel) => (
                <CaseStudyCard key={rel.slug} article={rel} />
              ))}
            </div>
          </div>
        </section>
      )}



      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
