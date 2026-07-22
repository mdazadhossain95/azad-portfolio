export const experience = [
  {
    id: "codego",
    company: "Codego",
    role: "Mobile Application Developer",
    period: "Mar 2024 – Jun 2026",
    location: "Remote · Milan, Italy",
    bullets: [
      "Shipped CodegoPay Individual and Business to both Play Store and App Store.",
      "Implemented fintech flows: IBAN onboarding, SEPA transfers, and biometric auth.",
      "Maintained stable release quality through QA, performance tuning, and production fixes.",
    ],
  },
  {
    id: "upwork",
    company: "Upwork",
    role: "Mobile Application Developer (Freelance)",
    period: "Feb 2024 – Present",
    location: "Remote",
    bullets: [
      "Delivered client apps end-to-end from requirement gathering to production release.",
      "Maintained 100% Job Success Score on Upwork with strong client retention.",
      "Integrated APIs, payments, and admin-ready flows across fintech and utility projects.",
    ],
  },
  {
    id: "appdevs",
    company: "AppDevs",
    role: "Senior Software Engineer",
    period: "Feb 2022 – Oct 2023",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Led cross-functional team building Flutter apps across fintech, e-commerce, and AI sectors.",
      "Mentored engineers on architecture, code quality, and scalable delivery practices.",
      "Recognized as Employee of Month in both 2022 and 2023.",
    ],
  },
  {
    id: "divine-it",
    company: "Divine IT Limited",
    role: "Software Engineer Intern",
    period: "Oct 2021 – Dec 2021",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Built Flutter feature modules and supported production release tasks.",
      "Gained practical experience across planning, coding, testing, and deployment.",
    ],
  },
];

export type Experience = (typeof experience)[number];
