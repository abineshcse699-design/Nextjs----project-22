import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const baseUrl = "https://www.starfii.com";
const appDir = path.join(process.cwd(), "app");

// Sitemap-la vara vendam nu nenaikkura routes inga podunga
const EXCLUDE = ["/api", "/admin"];

// app/ folder-a scan panni, page.tsx irukkura ella folder-um edukkum
function getRoutes(dir: string, base = ""): string[] {
  const routes: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;

    // Skip: private (_x), parallel (@x), dynamic ([slug])
    if (name.startsWith("_") || name.startsWith("@") || name.startsWith("[")) {
      continue;
    }

    const fullPath = path.join(dir, name);

    // (group) folders URL-la varadhu, so path-la serkka koodadhu
    const isGroup = name.startsWith("(") && name.endsWith(")");
    const routePath = isGroup ? base : `${base}/${name}`;

    const hasPage = ["page.tsx", "page.ts", "page.jsx", "page.js"].some((f) =>
      fs.existsSync(path.join(fullPath, f))
    );
    if (hasPage) routes.push(routePath || "/");

    routes.push(...getRoutes(fullPath, routePath));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const found = getRoutes(appDir).filter(
    (r) => !EXCLUDE.some((ex) => r === ex || r.startsWith(`${ex}/`))
  );

  const unique = Array.from(new Set(["", ...found.map((r) => (r === "/" ? "" : r))]));

  return unique.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.split("/").length > 2 ? 0.6 : 0.8,
  }));
}