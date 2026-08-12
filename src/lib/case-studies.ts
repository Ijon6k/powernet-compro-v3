import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface CaseStudyMetadata {
  slug: string;
  title: string;
  summary: string;
  client: string;
  category: string;
  publishDate: string;
  readTime: string;
  coverImage?: string;
  author?: string;
}

export interface CaseStudy extends CaseStudyMetadata {
  content: string;
}

const CASE_STUDIES_DIR = path.join(process.cwd(), "src/content/case-studies");

function isIgnoredFile(filename: string): boolean {
  const nameLower = filename.toLowerCase();
  return (
    nameLower.startsWith("_") ||
    nameLower.includes("template") ||
    !nameLower.endsWith(".md")
  );
}

export function getAllCaseStudies(): CaseStudyMetadata[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CASE_STUDIES_DIR);

  const articles: CaseStudyMetadata[] = [];

  for (const filename of files) {
    if (isIgnoredFile(filename)) {
      continue;
    }

    const filePath = path.join(CASE_STUDIES_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    const slug = filename.replace(/\.md$/, "");

    articles.push({
      slug,
      title: data.title || "Untitled Case Study",
      summary: data.summary || "",
      client: data.client || "POWERNET Client",
      category: data.category || data.industry || "Custom Software",
      publishDate: data.publishDate || data.date || "2025-01-01",
      readTime: data.readTime || "5 min read",
      coverImage: data.coverImage || undefined,
      author: data.author?.name || data.author || "Tim Engineering POWERNET",
    });
  }

  return articles.sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  if (!slug || slug.startsWith("_") || slug.toLowerCase().includes("template")) {
    return null;
  }

  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled Case Study",
    summary: data.summary || "",
    client: data.client || "POWERNET Client",
    category: data.category || data.industry || "Custom Software",
    publishDate: data.publishDate || data.date || "2025-01-01",
    readTime: data.readTime || "5 min read",
    coverImage: data.coverImage || undefined,
    author: data.author?.name || data.author || "Tim Engineering POWERNET",
    content,
  };
}

export function getAllCaseStudySlugs(): string[] {
  const articles = getAllCaseStudies();
  return articles.map((article) => article.slug);
}
