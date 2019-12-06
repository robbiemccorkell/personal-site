import { render } from "@testing-library/react";
import Footer from "../Footer";

test("matches snapshot", () => {
  const output = render(<Footer />);

  expect(output.container).toMatchSnapshot();
});
