import Head from "next/head";
import Layout from "./Layout";
import { BlogMeta } from "../types";

interface Props {
  meta: BlogMeta;
}

const BlogPost: React.FunctionComponent<Props> = ({ children, meta }) => (
  <Layout>
    <Head>
      <title>{meta.title}</title>
      {meta.canonical && <link rel="canonical" href={meta.canonical} />}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-okaidia.css" rel="stylesheet" />
    </Head>
    <h1>{meta.title}</h1>
    {meta.thumbnail && <img src={require(`../public/static/img/${meta.thumbnail}?size=800`)} />}
    {children}
  </Layout>
);

export default BlogPost;
