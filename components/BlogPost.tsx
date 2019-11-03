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
    </Head>
    {children}
  </Layout>
);

export default BlogPost;
