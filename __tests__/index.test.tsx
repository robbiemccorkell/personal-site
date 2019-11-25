import Blog from "../pages/blog";
import { render } from "@testing-library/react";
import { BlogEntry } from "../types";
import { RouterProvider, analytics } from "../test-utils";

test("it renders list of posts", () => {
  window.analytics = analytics();

  const posts: BlogEntry[] = [
    {
      fileName: "blog-name.mdx",
      slug: "blog-name",
      meta: {
        title: "My Blog",
        canonical: "/other/blog",
        date: "2019-01-02T12:00:00.000Z"
      }
    },
    {
      fileName: "another-blog.mdx",
      slug: "another-blog",
      meta: {
        title: "Another Blog",
        canonical: "/another/blog",
        date: "2019-01-01T12:00:00.000Z"
      }
    }
  ];
  const output = render(
    <RouterProvider>
      <Blog postsList={posts} />
    </RouterProvider>
  );

  const links = Array.from(output.container.querySelectorAll("a")).map(a =>
    a.getAttribute("href")
  );

  posts.forEach(post => {
    if (!post.meta.title) {
      throw "Missing post title";
    }
    expect(output.queryByText(post.meta.title)).not.toBeNull();
    expect(links).toEqual(
      expect.arrayContaining([expect.stringContaining(post.slug)])
    );
  });

  expect(output.queryByText("1st January 2019")).not.toBeNull();
  expect(output.queryByText("2nd January 2019")).not.toBeNull();
});
