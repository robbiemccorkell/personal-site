import { render } from "@testing-library/react";
import SlidesLive from "./SlidesLive";

test("injects parameters", () => {
  const presentationId = "123";
  const output = render(
    <SlidesLive
      presentationId={presentationId}
      verticalEnabled={false}
      autoPlay={true}
    />
  );

  expect(output.container).toMatchSnapshot();
});
