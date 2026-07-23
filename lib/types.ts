export type EvidenceLevel = "public" | "client-approved" | "private" | "unverified";

export type ProjectResult = {
  statement: string;
  evidence: EvidenceLevel;
  sourceUrl?: string;
};

export type ProjectLink = {
  playStore?: string;
  appStore?: string;
  live?: string;
  website?: string;
  github?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  status: "live" | "private" | "archived" | "concept";
  featured: boolean;
  priority: number;

  summary: string;
  productContext: string;
  businessProblem?: string;

  role: string;
  timeframe?: string;
  company?: string;
  teamContext?: string;
  ownershipNote: string;
  confidentialityNote?: string;

  platforms: string[];
  responsibilities: string[];
  challenges: string[];
  approach: string[];
  contributions: string[];
  technicalDecisions: Array<{
    title: string;
    explanation: string;
  }>;
  results: ProjectResult[];
  lessons?: string[];

  technologies: string[];
  integrations?: string[];

  constraints?: string[];
  edgeCases?: string[];
  testingAndRelease?: string[];
  relatedProjects?: Array<{
    title: string;
    slug: string;
  }>;

  coverImage: string;
  gallery: GalleryImage[];
  video?: {
    poster: string;
    src: string;
  };

  links: ProjectLink;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  role?: string;
  description: string;
  details?: string;
  images: string[];
  techStack: string[];
  features?: string[];
  links: ProjectLink;
  featured: boolean;
  createdAt?: number;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  preview: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  mediumUrl?: string;
  createdAt?: number;
};

export type Review = {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  createdAt?: number;
};

export type TravelPost = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  images: string[];
  location?: string;
  publishedAt: string;
  createdAt?: number;
};

export type Settings = {
  id: string;
  email: string;
  linkedin: string;
  github: string;
  upwork: string;
  resume?: string;
  x?: string;
  stackoverflow?: string;
  instagram?: string;
  medium?: string;
};
