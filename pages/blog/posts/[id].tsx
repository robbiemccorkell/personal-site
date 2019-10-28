import Layout from "../../../components/Layout";
import { BlogPost } from "../../../types";
import { NextPageContext } from "next";
import ErrorPage from "next/error";

interface Props {
  blogpost: BlogPost;
}

const Post = ({ blogpost }: Props) => {
  if (!blogpost) return <ErrorPage statusCode={404} />;

  const { html, attributes } = blogpost;

  return (
    <Layout>
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
  const { id: slug } = query;
  const blogpost = await import(`../../../content/blogPosts/${slug}.md`).catch(
    () => {
      if (res) res.statusCode = 404;
    }
  );
  return { blogpost };
};

export default Post;
