import { render } from "@testing-library/react";
import YouTube from "../YouTube";

test("injects parameters", () => {
  const videoId = "123";
  const { container } = render(<YouTube videoId={videoId} />);

  expect(container.querySelector("iframe").getAttribute("src")).toContain(
    videoId
  );
});
