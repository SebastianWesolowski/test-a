import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { BasicLayout } from ".";

describe("Components", () => {
  describe("BasicLayout", () => {
    const props = {
      dummy: "test",
    };

    const component = renderer.create(<BasicLayout {...props} />);
    const tree = component.toJSON();

    it("should render without errors", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
