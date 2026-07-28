import { projects } from "@/content/projects";
import { Review, Settings, TravelPost } from "@/lib/types";

export const defaultProjects = projects;

export const defaultReviews: Review[] = [
  {
    id: "r1",
    name: "Verified Upwork Client",
    role: "Flutter SMS Forwarder App",
    text: "I had a fantastic experience with this developer. They delivered a high-quality Flutter app that perfectly met all requirements, including a successful remote setup and live testing on my device. Their expertise and communication were excellent, and I highly recommend Azad.",
    rating: 5,
    company: "Upwork",
  },
];

export const defaultTravels: TravelPost[] = [
  {
    id: "t1",
    title: "Remote Work Notes from Cox's Bazar",
    slug: "remote-work-notes-coxs-bazar",
    summary: "Balancing shipping sprints with ocean mornings.",
    content:
      "Travel improves creativity. I batch deep work in mornings, leave afternoons for async reviews and architecture planning.",
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"],
    location: "Cox's Bazar, Bangladesh",
    publishedAt: "2026-03-01",
  },
];

export const defaultSettings: Settings = {
  id: "main",
  email: "mdazadhossain95@gmail.com",
  linkedin: "https://www.linkedin.com/in/azadhossain-tutul/",
  github: "https://github.com/mdazadhossain95",
  upwork: "https://www.upwork.com/freelancers/azadflutterdev",
  resume: "https://drive.google.com/file/d/17Zn1Sq-7JfqW5FOHcV3j3b0l5pyL0y9v/view?usp=sharing",
  x: "https://twitter.com/mdazadhossain95",
  stackoverflow: "https://stackoverflow.com/users/14659281/azad-hossain",
  instagram: "https://www.instagram.com/azad.officialll",
  medium: "https://medium.com/@mdazadhossain95",
};
