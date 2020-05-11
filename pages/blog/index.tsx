import Link from "next/link";
import Layout from "components/Layout";
import { parseISO, format } from "date-fns";
import { BlogEntry, BlogManifest } from "types";
import { NextPage } from "next";

interface Props {
  postsList: BlogEntry[];
}

const Blog: NextPage<Props> = ({ postsList }) => (
  <Layout pageTitle="Blog">
    {postsList.map(post => (
      <div key={post.slug} className="post">
        <Link href={`/blog/posts/${post.slug}`}>
          <a className="link">
            <div className="title-wrapper">
              <h2 className="title">{post.meta.title}</h2>
              {post.meta.date && (
                <div className="date">
                  {format(parseISO(post.meta.date), "do MMMM yyyy")}
                </div>
              )}
            </div>
            {post.meta.thumbnail && (
              <img
                className="thumbnail"
                src={require(`public/static/img/${post.meta.thumbnail}?size=400`)}
              />
            )}
          </a>
        </Link>
      </div>
    ))}
    <style jsx>{`
      .link {
        display: flex;
        flex-flow: column;
        text-decoration: none;
        color: #000;
      }
      .title-wrapper {
        padding-bottom: 16px;
      }
      .title {
        font-size: 20px;
      }
      .link:hover .title {
        text-decoration: underline;
      }
      .post {
        border-bottom: 2px solid black;
        margin-top: 32px;
        padding-bottom: 32px;
      }
      .post:last-child {
        border-bottom: none;
      }
      .thumbnail {
        height: 180px;
        min-width: 160px;
        object-fit: cover;
      }
      .date {
        color: #999999;
        font-size: 16px;
      }

      @media only screen and (min-width: 520px) {
        .link {
          flex-flow: row;
        }
        .title {
          padding-right: 16px;
        }
        .title-wrapper {
          padding-bottom: 0;
        }
        .thumbnail {
          height: 120px;
          max-width: 180px;
          min-width: 180px;
        }
      }
    `}</style>
  </Layout>
);

Blog.getInitialProps = async () => {
  const blogManifest = (process.env.blogManifest || {}) as BlogManifest;

  return { postsList: blogManifest };
};

export default Blog;
