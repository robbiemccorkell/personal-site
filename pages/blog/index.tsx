import Link from "next/link";
import Layout from "../../components/Layout";
import { BlogPost, BlogManifest } from "../../types";
import { NextPage } from "next";

interface Props {
  postsList: BlogPost[];
}

const Blog: NextPage<Props> = ({ postsList }) => (
  <Layout>
    {postsList.map((post: any) => (
      <div key={post.slug} className="post">
        <Link href="/blog/posts/[slug]" as={`/blog/posts/${post.slug}`}>
          <a>
            <img src={post.attributes.thumbnail} />
            <h2>{post.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}
    <style jsx>{`
      .post {
        text-align: center;
      }
      img {
        max-width: 100%;
        max-height: 300px;
      }
    `}</style>
  </Layout>
);

Blog.getInitialProps = async () => {
  const blogManifest = (process.env.blogManifest || {}) as BlogManifest;
  const postsList = await Promise.all(
    Object.entries(blogManifest).map(async ([slug, fileName]) => {
      const markdown = await import(`../../content/blogPosts/${fileName}`);
      return { ...markdown, slug };
    })
  );

  return { postsList };
};

export default Blog;
