import Link from "next/link";
import Layout from "../../components/Layout";
import { slugifyFileName } from '../../lib';
import { BlogPost } from '../../types';

interface Props {
  postsList: BlogPost[]
}

const Blog = ({ postsList }: Props) => (
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
  const markdownFiles = require
    .context("../../content/blogPosts", false, /\.md$/)
    .keys()
    .map((relativePath: string) => relativePath.substring(2));

  const postsList = await Promise.all(
    markdownFiles.map(async (path: string) => {
      const markdown = await import(`../../content/blogPosts/${path}`);
      return { ...markdown, slug: slugifyFileName(path) };
    })
  );

  return { postsList };
};

export default Blog;
