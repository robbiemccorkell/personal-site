const fs = require("fs");
const slugify = require("slugify");

const blogPostsFolder = "./content/blogPosts";
const blogPostsUrl = "/blog/posts"

const blogManifest = fs.readdirSync(blogPostsFolder).reduce(
  (acc, fileName) =>
    Object.assign(acc, {
      [slugify(fileName.split('.')[0])]: fileName
    }),
  {}
);

const blogPathMap = Object.keys(blogManifest).reduce(
  (acc, slug) =>
    Object.assign(acc, {
      [`${blogPostsUrl}/${slug}`]: {
        page: `${blogPostsUrl}/[slug]`,
        query: {
          slug
        }
      }
    }),
  {}
);

module.exports = {
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...blogPathMap
    };
  },
  env: {
    blogManifest
  },
};
