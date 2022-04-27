import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { GlobalContainer } from ".";

describe("Components", () => {
  describe("GlobalContainer", () => {
    const component = renderer.create(<GlobalContainer />);
    const tree = component.toJSON();

    it("should render without errors", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
