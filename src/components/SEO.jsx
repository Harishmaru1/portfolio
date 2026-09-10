import { useEffect } from "react";

export const SEO = ({
  title = "Harish Maru | Full Stack Developer & Software Engineer in Indore",
  description = "Harish Maru is a Full Stack Developer and Software Engineer in Indore, Madhya Pradesh, specializing in React.js, Node.js, MERN stack, PHP, MySQL, and modern web applications.",
  canonical = "https://harish-maru.netlify.app/",
  ogType = "website",
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    // Update Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute("href", canonical);
    } else {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      linkCanonical.setAttribute("href", canonical);
      document.head.appendChild(linkCanonical);
    }

    // Update Open Graph tags
    const setMetaProperty = (prop, val) => {
      let meta = document.querySelector(`meta[property="${prop}"]`);
      if (meta) {
        meta.setAttribute("content", val);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("property", prop);
        meta.setAttribute("content", val);
        document.head.appendChild(meta);
      }
    };

    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);
    setMetaProperty("og:url", canonical);
    setMetaProperty("og:type", ogType);

    // Update Twitter tags
    const setMetaName = (name, val) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute("content", val);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        meta.setAttribute("content", val);
        document.head.appendChild(meta);
      }
    };

    setMetaName("twitter:title", title);
    setMetaName("twitter:description", description);
    setMetaName("twitter:url", canonical);
  }, [title, description, canonical, ogType]);

  return null;
};
