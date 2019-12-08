import { render } from "@testing-library/react";
import TalkItem from "../TalkItem";

test("renders props", () => {
  const props = {
    title: "title",
    description: "description",
    date: "2017-09-01T12:00:00.000Z",
    location: "location",
    children: <div data-testid="child-element" />
  };
  const { queryByTestId, queryByText } = render(<TalkItem {...props} />);

  expect(queryByTestId("child-element")).not.toBeNull();
  expect(queryByText(props.title)).not.toBeNull();
  expect(queryByText(props.description)).not.toBeNull();
  expect(queryByText(props.location)).not.toBeNull();

  expect(queryByText("September 2017", { exact: false })).not.toBeNull();
});
