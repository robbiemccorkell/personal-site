import { NextPageContext, NextPage } from "next";
import ErrorPage from "next/error";
import Head from 'next/head'
import Layout from "../../../components/Layout";
import { BlogPost, BlogManifest } from "../../../types";

interface Props {
  blogpost: BlogPost;
}

const Post: NextPage<Props> = ({ blogpost }) => {
  if (!blogpost) return <ErrorPage statusCode={404} />;

  const { html, attributes } = blogpost;

  return (
    <Layout>
      <Head>
        <title>{attributes.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {attributes.canonical && 
          <link rel="canonical" href={attributes.canonical} />
        }
      </Head>
      <article>
        <h1>{attributes.title}</h1>
        <img src={attributes.thumbnail} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <style jsx>{`
        article {
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async ({ query, res }: NextPageContext) => {
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;
  const blogManifest = (process.env.blogManifest || {}) as BlogManifest;
  const blogpost = await import(`../../../content/blogPosts/${blogManifest[slug]}`).catch(
    () => {
      if (res) res.statusCode = 404;
    }
  );
  return { blogpost };
};

export default Post;
