// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  image, 
  type = "website",
  publishedTime,
  modifiedTime,
  schema 
}) => {
  const siteUrl = "https://www.sharebazaaronline.com";
  const siteTitle = "ShareBazaarOnline";
  const defaultImage = "/default-og-image.jpg";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      
      <meta name="description" content={description || "ShareBazaarOnline - Your trusted source for market insights"} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || "ShareBazaarOnline - Your trusted source for market insights"} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${siteUrl}${canonical || ""}`} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || "ShareBazaarOnline - Your trusted source for market insights"} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {type === "article" && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}
      
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify({
            ...schema,
            "@context": schema["@context"] || "https://schema.org",
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;