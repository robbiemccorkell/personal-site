import { render, waitForDomChange } from "@testing-library/react";
import { RouterProvider, analytics } from "../test-utils";
import Layout from "./Layout";

test("renders children", () => {
  const message = "Hello World";
  window.analytics = analytics();

  const { queryByText } = render(
    <RouterProvider>
      <Layout pageTitle="My Page">{message}</Layout>
    </RouterProvider>
  );

  expect(queryByText(message)).not.toBeNull();
});

test("sends route to analytics", async () => {
  const message = "Hello World";
  const router = {
    route: "/pages/my-page"
  };
  window.analytics = analytics();

  render(
    <RouterProvider value={router}>
      <Layout pageTitle="My Page">{message}</Layout>
    </RouterProvider>
  );

  
  expect(window.analytics.page).toHaveBeenCalledWith(router.route)
});
