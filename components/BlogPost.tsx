import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { parseISO, format } from "date-fns";
import Layout from "./Layout";
import { BlogMeta } from "../types";
import P from "./P";

interface Props {
  meta: BlogMeta;
}

const mdComponents: Record<string, React.FunctionComponent> = {
  p: P
};

const BlogPost: React.FunctionComponent<Props> = ({ children, meta }) => (
  <Layout>
    <Head>
      <title>{meta.title}</title>
      {meta.canonical && <link rel="canonical" href={meta.canonical} />}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-okaidia.css"
        rel="stylesheet"
      />
    </Head>

    <h2>{meta.title}</h2>
    {meta.date && (
      <p className="published-date">
        Published {format(parseISO(meta.date), "do MMMM yyyy")}
      </p>
    )}
    {meta.thumbnail && (
      <img src={require(`../public/static/img/${meta.thumbnail}?size=645`)} />
    )}
    <MDXProvider components={mdComponents}>{children}</MDXProvider>
    <style jsx>{`
      .published-date {
        color: #999999;
      }
    `}</style>
  </Layout>
);

export default BlogPost;
