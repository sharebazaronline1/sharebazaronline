export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://ucbtqpkakcornjoobznn.supabase.co/functions/v1/sitemap"
    );

    if (!response.ok) {
      return res.status(response.status).send("Unable to fetch sitemap");
    }

    const xml = await response.text();

    res.setHeader("Content-Type", "application/xml");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    return res.status(200).send(xml);
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
}