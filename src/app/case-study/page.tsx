import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/case-studies";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Case Studies | POWERNET",
  description:
    "Dokumentasi proyek operasional, arsitektur sistem, dan studi kasus teknologi POWERNET.",
  openGraph: {
    title: "Case Studies | POWERNET",
    description:
      "Dokumentasi proyek operasional dan studi kasus teknologi POWERNET.",
    url: "https://powernet.co.id/case-study",
    siteName: "POWERNET",
    locale: "id_ID",
    type: "website",
  },
};

export default function CaseStudyListPage() {
  const articles = getAllCaseStudies();
  const leadArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Header - Full Width 1440px matching Landing Page */}
      <section className="pt-[110px] sm:pt-[140px] lg:pt-[170px] pb-10 sm:pb-16 bg-white border-b border-[#D9D9D9]/70">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
          <div className="max-w-4xl flex flex-col gap-3 sm:gap-4">
            <span className="text-xs sm:text-sm font-semibold text-[#737373] tracking-widest uppercase font-inter-tight">
              Case Studies &amp; Technical Notes
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold text-[#262626] font-inter-tight tracking-tight leading-tight sm:leading-[1.15]">
              Studi Kasus Operasional &amp; Engineering
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-[#595959] font-inter-tight font-normal leading-relaxed max-w-3xl">
              Dokumentasi terstruktur mengenai masalah operasional di lapangan,
              arsitektur teknologi yang dibangun, serta hasil yang dicapai.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Articles List - 1440px Max Width with 2xl 3-Column Support */}
      <section className="py-10 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-10 lg:gap-14">
          {/* Lead Article */}
          {leadArticle && (
            <div>
              <CaseStudyCard article={leadArticle} featured={true} />
            </div>
          )}

          {/* Remaining Articles List */}
          {remainingArticles.length > 0 && (
            <div className="flex flex-col gap-6 pt-4">
              <div className="pb-4 border-b border-[#262626]/20">
                <h2 className="text-base sm:text-lg font-semibold text-[#262626] font-inter-tight tracking-tight uppercase">
                  Artikel Lainnya
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-10 2xl:gap-12">
                {remainingArticles.map((article) => (
                  <CaseStudyCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Minimalist Bottom CTA */}
      <section className="py-14 sm:py-20 bg-[#FAF9F9] border-t border-b border-[#D9D9D9]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex flex-col gap-2.5 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#262626] font-inter-tight tracking-tight leading-tight">
              Diskusi Proyek Operasional Anda
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#595959] font-inter-tight leading-relaxed">
              Konsultasikan alur kerja dan tantangan teknis organisasi Anda langsung bersama tim arsitek software POWERNET.
            </p>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi via WhatsApp"
            className="flex-shrink-0 w-full sm:w-auto"
          >
            <Button
              variant="outline-primary"
              size="large"
              className="!w-full sm:!w-auto !px-8 !h-[56px] !rounded-md !text-lg !font-medium justify-center"
              iconRight={
                <i className="fi fi-rr-arrow-small-right text-[#C02026] text-xl ml-1 inline-flex items-center" />
              }
            >
              Hubungi Tim Engineering
            </Button>
          </a>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
