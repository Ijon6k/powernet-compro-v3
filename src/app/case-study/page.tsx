import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Case Studies | POWERNET",
  description: "Case Studies feature is currently disabled.",
};

export default function CaseStudyListPage() {
  notFound();
}
