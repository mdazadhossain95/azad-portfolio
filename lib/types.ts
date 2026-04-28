export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
  techStack: string[];
  links: {
    playStore?: string;
    appStore?: string;
    live?: string;
  };
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
  x?: string;
  stackoverflow?: string;
  instagram?: string;
  medium?: string;
};
