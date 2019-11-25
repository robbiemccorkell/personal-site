import { render } from "@testing-library/react";
import P from "./P";

test("renders children", () => {
  const message = "Hello World";
  const { queryByText } = render(<P>{message}</P>);

  expect(queryByText(message)).not.toBeNull();
});
