import createMDX from "@next/mdx";
import withPlaiceholder from "@plaiceholder/next";
import type { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      "remark-gfm",
      ["remark-mdx-frontmatter", { name: "frontmatter" }],
    ],
  },
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  allowedDevOrigins: ["10.0.46.250"],
  experimental: {
    viewTransition: true,
  },
};

export default withPlaiceholder(withMDX(nextConfig));
