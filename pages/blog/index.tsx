import Link from "next/link";
import Layout from "../../components/Layout";
import { BlogEntry, BlogManifest } from "../../types";
import { NextPage } from "next";

interface Props {
  postsList: BlogEntry[];
}

const Blog: NextPage<Props> = ({ postsList }) => (
  <Layout>
    {postsList.map(post => (
      <div key={post.slug} className="post">
        <Link href={`/blog/posts/${post.slug}`}>
          <a>
            {post.meta.thumbnail && <img src={require(`../../public/static/img/${post.meta.thumbnail}?size=200`)} />}
            <h2>{post.meta.title}</h2>
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

  return { postsList: blogManifest };
};

export default Blog;
