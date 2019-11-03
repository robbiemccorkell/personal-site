const fs = require("fs");
const slugify = require("slugify");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

const blogPostsFolder = "./pages/blog/posts";
const metaMatcher = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;

const removeFileExtension = fileName =>
  fileName
    .split(".")
    .slice(0, -1)
    .join(".");

const getBlogMeta = fileName => {
  const contents = fs.readFileSync(`${blogPostsFolder}/${fileName}`);
  const match = metaMatcher.exec(contents);

  if (!match || typeof match[1] !== "string")
    throw new Error(
      `${fileName} must provider metadata in the form: export const meta = {}`
    );

  const meta = eval(`(${match[1]})`);
  return meta;
};

const blogManifest = fs
  .readdirSync(blogPostsFolder)
  .map(fileName => ({
    fileName,
    slug: removeFileExtension(fileName),
    meta: getBlogMeta(fileName)
  }))
  .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

module.exports = withMDX({
  target: "server",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  env: {
    blogManifest
  }
});
