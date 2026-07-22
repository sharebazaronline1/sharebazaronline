import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { fetchIPOs, fetchPreIPODetails,fetchInsightDetails } from "../src/api/mockApi.js";
import slugify from "../src/utils/slugify.js";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

const BASE_URL = "https://www.sharebazaaronline.com";

export default async function handler(req, res) {
  const sitemap = new SitemapStream({
    hostname: BASE_URL,
  });

  /* STATIC PAGES */

  const staticPages = [
    "/",
    "/ipo-tracker",
    "/pre-ipo-stocks",
    "/broker-analyzer",
    "/insight-hub",
    "/skill-up",
    "/how-to-apply-ipo",
  ];

  staticPages.forEach((page) => {
    sitemap.write({
      url: page,
      changefreq: "daily",
      priority: 0.9,
    });
  });

  /* IPO PAGES */

  const ipos = await fetchIPOs();

  ipos.forEach((ipo) => {
    sitemap.write({
      url: `/ipo/${ipo.id}/${slugify(
        ipo.name || ipo.fullName
      )}`,
      changefreq: "daily",
      priority: 0.8,
    });
  });

  /* PRE IPO PAGES */

  const preipos = await fetchPreIPODetails();

  preipos.forEach((company) => {
    sitemap.write({
      url: `/preipo/${company.id}/${slugify(company.name)}`,
      changefreq: "daily",
      priority: 0.8,
    });
  });
  /* INSIGHT HUB BLOGS */

  // Fetch published blogs from Supabase
  const { data: dbBlogs, error } = await supabase
    .from("blogs")
    .select("id,title,published_at,status")
    .eq("status", "published");

  if (error) {
    console.error("Supabase blog fetch error:", error);
  }

  // Fetch mock blogs
  const mockBlogs = await fetchInsightDetails();

  // Format both sources
  const formattedDB = (dbBlogs || []).map((blog) => ({
    id: blog.id,
    title: blog.title,
    published_at: blog.published_at,
  }));

  const formattedMock = (mockBlogs || []).map((blog) => ({
    id: `mock-${blog.id}`,
    title: blog.title,
    published_at: blog.date,
  }));

  // Merge & remove duplicates by title
  const blogMap = new Map();

  [...formattedDB, ...formattedMock].forEach((blog) => {
    if (!blogMap.has(blog.title)) {
      blogMap.set(blog.title, blog);
    }
  });

  const blogs = Array.from(blogMap.values());

  blogs.forEach((blog) => {
    sitemap.write({
      url: `/insight-hub/${blog.id}/${slugify(blog.title)}`,
      lastmod: blog.published_at
        ? new Date(blog.published_at).toISOString()
        : undefined,
      changefreq: "weekly",
      priority: 0.8,
    });
  });
  
  sitemap.end();

  const data = await streamToPromise(sitemap);

 const xml = data.toString();

res.setHeader("Content-Type", "application/xml");
res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
res.status(200).send(xml);
}

generateSitemap();