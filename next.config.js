const fs = require("fs");
const slugify = require("slugify");
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const rehypePrism = require("@mapbox/rehype-prism");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
require("dotenv").config();

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypePrism]
  }
});

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        imagesFolder: "img"
      }
    ],
    withMDX
  ],
  {
    target: "server",
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    env: {
      SEGMENT_ANALYTICS_KEY: process.env.SEGMENT_ANALYTICS_KEY
    }
  }
);
