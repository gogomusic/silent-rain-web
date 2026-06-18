import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

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

export default withMDX(nextConfig);
