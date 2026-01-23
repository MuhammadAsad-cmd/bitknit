const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bitknitlimited.com";

export default function sitemap() {
  const routes = [
    "",
    "/projects",
    "/services",
    "/team",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
