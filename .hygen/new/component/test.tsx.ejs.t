---
to: <%= absPath %>/<%= component_name %>.spec.tsx
---
import { <%= component_name %> } from ".";

describe("Components", () => {
  describe("<%= category %>", () => {
    describe("<%= component_name %>", () => {
      it("should render without errors", () => {

      });
    });
  });
});
