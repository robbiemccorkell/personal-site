import { render } from "@testing-library/react";
import ContentWrapper from "../ContentWrapper";

test("renders children", () => {
  const message = "Hello World";

  const { queryByText } = render(<ContentWrapper>{message}</ContentWrapper>);

  expect(queryByText(message)).not.toBeNull();
});
