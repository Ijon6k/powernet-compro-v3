"use client";

import React from "react";
import { portoProjects, PortoProject } from "@/data/portoData";

export const PortoProjectsSection: React.FC = () => {
  return (
    <section className="w-full bg-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header Title Section */}
        <div className="max-w-[712px] mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-black font-inter-tight leading-tight lg:leading-[60px] mb-3 sm:mb-4">
            Our Latest Projects
          </h1>
          <p className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#262626] font-inter-tight leading-relaxed lg:leading-[36px]">
            Digital systems, platforms, and experiences we&apos;ve designed and built.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
          {portoProjects.map((project: PortoProject) => (
            <div
              key={project.id}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 xl:gap-16 pt-8 border-t border-[#D9D9D9]/40 first:border-t-0 first:pt-0"
            >
              {/* Left Column: Text & Tags */}
              <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4 max-w-[584px]">
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-black font-inter-tight leading-tight lg:leading-[54px]">
                    {project.title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-[24px] text-[#262626] font-normal font-inter-tight leading-relaxed lg:leading-[36px]">
                    {project.description}
                  </p>
                </div>

                {/* Tags Badges */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[12px] bg-[#F9E9E9] text-[#C02026] text-sm sm:text-base lg:text-[20px] font-normal font-inter-tight leading-snug border border-[#F9E9E9] transition-colors hover:bg-[#F3D5D5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Preview Image / Graphic */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-auto object-cover block"
                  onError={(e) => {
                    if (project.placeholderUrl) {
                      e.currentTarget.src = project.placeholderUrl;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
