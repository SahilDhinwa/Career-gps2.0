import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atreya-med.vercel.app";
  const lastModified = new Date();

  // 1. Core Portal & Command Hubs
  const coreRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/atreya", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/bams-scholar", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // 2. ATREYA Global Modules (Daily Regimen + 5 Standalone Clinical Pillars)
  const globalAtreyaRoutes = [
    "/atreya/daily-regimen",
    "/atreya/science-vault",
    "/atreya/diagnostics",
    "/atreya/gut-brain-pharmacology",
    "/atreya/gateway-curriculum",
    "/atreya/global-symposium",
  ].map((path) => ({
    path,
    priority: 0.9,
    changeFrequency: "weekly" as const,
  }));

  // 3. BAMS Clinical Studios & Handwritten Exam Notes
  const bamsClinicalRoutes = [
    "/dravyaguna",
    "/dinacharya",
    "/short-notes",
    "/short-notes/agada-tantra/chapter-1",
    "/short-notes/agada-tantra/chapter-2",
    "/short-notes/agada-tantra/chapter-3",
    "/short-notes/agada-tantra/chapter-4",
    "/short-notes/agada-tantra/chapter-5",
    "/short-notes/agada-tantra/chapter-6",
    "/short-notes/agada-tantra/chapter-7",
    "/short-notes/agada-tantra/chapter-8",
    "/short-notes/agada-tantra/chapter-9",
    "/short-notes/agada-tantra/chapter-10",
    "/short-notes/agada-tantra/chapter-11",
    "/short-notes/agada-tantra/chapter-12",
    "/short-notes/agada-tantra/chapter-13",
    "/short-notes/agada-tantra/chapter-14",
    "/short-notes/agada-tantra/chapter-15",
    "/short-notes/agada-tantra/chapter-16",
    "/short-notes/agada-tantra/chapter-18",
    "/short-notes/agada-tantra/chapter-19",
    "/short-notes/agada-tantra/chapter-20",
    "/short-notes/agada-tantra/batch-21-mcqs",
    "/short-notes/agada-tantra/batch-22-mcqs",
    "/short-notes/agada-tantra/ipc-crpc-bns-notes",
    "/short-notes/swasth-vritta",
    "/short-notes/swasth-vritta/paper-1/chapter-1",
    "/short-notes/swasth-vritta/paper-1/chapter-2",
    "/short-notes/swasth-vritta/paper-1/chapter-10-naturopathy/part-1",
  ].map((path) => ({
    path,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  }));

  const allRoutes = [
    ...coreRoutes,
    ...globalAtreyaRoutes,
    ...bamsClinicalRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
