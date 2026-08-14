export interface PortoProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  placeholderUrl?: string;
  demoUrl?: string;
}

export const portoProjects: PortoProject[] = [
  {
    id: "berbagift",
    title: "Berbagift",
    description:
      "A blockchain-enabled gifting platform built for creators and communities to share digital THR in a more engaging and culturally relevant way.",
    tags: ["Interactive UX", "Community Platform", "Blockchain Integration"],
    imageSrc: "/porto/berbagift.webp",
    imageAlt: "Berbagift Blockchain Gifting Platform Dashboard",
    placeholderUrl:
      "https://placehold.co/1136x638/FAFAFA/262626?text=Berbagift+Platform",
  },
  {
    id: "nusacode",
    title: "NusaCode",
    description:
      "An IT course marketplace that helps learners identify the most suitable learning path through AI-assisted assessment and personalized course recommendations.",
    tags: [
      "AI Assessment",
      "Learning Path",
      "AI Role Play",
      "Course Marketplace",
    ],
    imageSrc: "/porto/nusacode.webp",
    imageAlt: "NusaCode IT Course Marketplace & AI Assessment",
    placeholderUrl:
      "https://placehold.co/1136x638/FAFAFA/262626?text=NusaCode+Platform",
  },
  {
    id: "hackathon-management-system",
    title: "Hackathon Management System",
    description:
      "A hackathon competition management platform for registration, team invitations, submission tracking, and progress monitoring.",
    tags: ["Participant Management", "Submission Tracking"],
    imageSrc: "/porto/hackkathon.webp",
    imageAlt: "Hackathon Management System Dashboard",
    placeholderUrl:
      "https://placehold.co/1136x638/FAFAFA/262626?text=Hackathon+Management+System",
  },
  {
    id: "sales-monitoring-system",
    title: "Sales Monitoring System",
    description:
      "A lightweight system for small businesses to centralize sales data, automate processing, and provide real-time sales visibility.",
    tags: ["Workflow Automation", "Sales Analytics Dashboard"],
    imageSrc: "/porto/sales.webp",
    imageAlt: "Sales Monitoring System Analytics Dashboard",
    placeholderUrl:
      "https://placehold.co/1136x638/FAFAFA/262626?text=Sales+Monitoring+System",
  },
];
