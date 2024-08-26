import { GetServerSideProps } from "next";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  // Fetch static paths (without /post prefix)
  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/product",
    "/faqs",
    "/knowledge-hub",
    "/faqs/#contact",
  ];

  // Fetch dynamic paths from your API
  const response = await fetch("https://admin.greenkpo.com/api/posts");
  const { data: posts } = await response.json();

  // Generate dynamic paths using the `slug` field (with /post prefix)
  const dynamicPaths = posts.map((post) => `/post/${post.slug}`);

  // Combine static and dynamic paths
  const allPaths = [...staticPaths, ...dynamicPaths];

  // Create sitemap XML structure
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths
      .map((url) => {
        return `
          <url>
            <loc>${`https://greenkpo.com${url}`}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  // Send the sitemap to the response
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
