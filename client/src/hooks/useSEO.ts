import { useEffect } from "react";

/**
 * Custom Hook für dynamische SEO Meta-Tags
 * Aktualisiert Title, Description und Canonical URL für jede Seite
 */
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogType = "website",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // Update canonical URL
    let linkCanonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = canonical;
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute("content", content);
    };

    updateOGTag("og:title", ogTitle || title);
    updateOGTag("og:description", ogDescription || description);
    updateOGTag("og:type", ogType);
    if (canonical) {
      updateOGTag("og:url", canonical);
    }

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement("meta");
        twitterTag.setAttribute("name", name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute("content", content);
    };

    updateTwitterTag("twitter:title", ogTitle || title);
    updateTwitterTag("twitter:description", ogDescription || description);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogType]);
}
