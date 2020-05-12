import fs from "fs";

const metaMatcher = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;

const getBlogMeta = (folder: string, fileName: string) => {
  const contents = fs.readFileSync(`${folder}/${fileName}`);
  const match = metaMatcher.exec(contents.toString());

  if (!match || typeof match[1] !== "string")
    throw new Error(
      `${fileName} must provider metadata in the form: export const meta = {}`
    );

  const meta = eval(`(${match[1]})`);
  return meta;
};

const removeFileExtension = (fileName: string) =>
  fileName
    .split(".")
    .slice(0, -1)
    .join(".");

export const getBlogManifest = (blogFolder: string) =>
  fs
    .readdirSync(blogFolder)
    .map(fileName => ({
      fileName,
      slug: removeFileExtension(fileName),
      meta: getBlogMeta(blogFolder, fileName)
    }))
    .sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
