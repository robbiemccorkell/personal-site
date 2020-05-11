import { render, getNodeText } from "@testing-library/react";
import { RouterProvider, analytics } from "test-utils";
import BlogPost from "../BlogPost";

test("renders children", () => {
  const message = "Hello World";
  const meta = {};
  window.analytics = analytics();

  const { queryByText } = render(
    <RouterProvider>
      <BlogPost meta={meta}>{message}</BlogPost>
    </RouterProvider>
  );

  expect(queryByText(message)).not.toBeNull();
});

test("renders metadata", () => {
  const message = "Hello World";
  const meta = {
    title: "My Blog",
    canonical: "/other/blog",
    date: "2019-01-01T12:00:00.000Z"
  };
  window.analytics = analytics();

  const { container, queryByText } = render(
    <RouterProvider>
      <BlogPost meta={meta}>{message}</BlogPost>
    </RouterProvider>
  );

  const h2 = getNodeText(container.querySelector("h2") || new HTMLElement());

  expect(h2).toBe(meta.title);
  expect(queryByText("1st January 2019", { exact: false })).not.toBeNull();
});
